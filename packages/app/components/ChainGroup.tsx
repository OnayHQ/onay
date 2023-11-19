import { addressShortner } from "@/utils";
import Safe from "@safe-global/protocol-kit";
import {
  useWeb3ModalAccount,
  useWeb3ModalSigner,
} from "@web3modal/ethers5/react";
import { useCallback, useEffect, useState } from "react";
import { ethers } from "ethers";
import { EthersAdapter } from "@safe-global/protocol-kit";
import { OwnerResponse } from "@safe-global/api-kit";
import SafeApiKit from "@safe-global/api-kit";
import { request } from "graphql-request";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/Select";
import Image from "next/image";
import { SoapIcon } from "@/components/icons/SoapIcon";
import {
  NetworkQueryName,
  getAllowancesQuery,
  queryUrl,
} from "@/app/approvals/query";
import { TokenApprovalsTable } from "@/components/TokenApprovalsTable";

const moduleAddressMap: Record<number, string> = {
  42161: "0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25",
  8453: "0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25",
  42220: "0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25",
  100: "0x62450f4067C79EfdBF2ABd5ae6F089d81cd6672d",
  1101: "0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25",
  534352: "0x1e4feed269D99B67B2Bf70Ab5BAab3Ca46285C25",
};

const safesServicesURLMap: Record<number, string> = {
  42161: "https://safe-transaction-arbitrum.safe.global/",
  8453: "https://safe-transaction-base.safe.global/",
  42220: "https://safe-transaction-celo.safe.global/",
  100: "https://safe-transaction-gnosis-chain.safe.global/",
  1101: "https://safe-transaction-zkevm.safe.global/",
};

export const ChainGroup = ({
  chainId,
  queryName,
  name,
  logo,
}: {
  chainId: number;
  queryName: NetworkQueryName;
  name: string;
  logo: string;
}) => {
  const { address, chainId: connectedChainId } = useWeb3ModalAccount();
  const { signer } = useWeb3ModalSigner();
  const [safesList, setSafesList] = useState<string[]>();
  const [selectedSafeAddress, setSelectedSafeAddress] = useState<string>();
  const [isEnabledModule, setIsEnabledModule] = useState<boolean>();
  const [safeSDK, setSafeSDK] = useState<Safe>();
  const [loadingIsEnabledModule, setLoadingIsEnabledModule] =
    useState<boolean>();
  const [loadingSubmitTransaction, setLoadingSubmitTransaction] =
    useState<boolean>();
  const [allowances, setAllowances] = useState<any>();
  const getAllowances = useCallback(async () => {
    const result: any = await request(queryUrl(queryName), getAllowancesQuery, {
      address: selectedSafeAddress,
    });
    console.log("queryUrl:", queryUrl(queryName));
    console.log("result:", result);
    if (result && result.accounts.length > 0) {
      console.log("entrei", result);
      setAllowances(result.accounts[0].allowances);
    }
  }, [queryName, selectedSafeAddress]);
  useEffect(() => {
    if (selectedSafeAddress) {
      getAllowances();
    }
  }, [allowances, getAllowances, selectedSafeAddress]);
  const createSafeSDK = useCallback(async () => {
    if (!signer || !selectedSafeAddress) return;
    const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });
    const safeSdk = await Safe.create({
      ethAdapter,
      safeAddress: selectedSafeAddress,
    });
    setSafeSDK(safeSdk);
  }, [selectedSafeAddress]);
  useEffect(() => {
    createSafeSDK();
  }, [createSafeSDK]);
  const getSafesByOwner = useCallback(async () => {
    if (!signer || !address || !chainId) return;
    const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });
    try {
      const safeApiKit = new SafeApiKit({
        txServiceUrl: safesServicesURLMap[chainId],
        ethAdapter,
      });
      const safes: OwnerResponse = await safeApiKit.getSafesByOwner(address);
      setSafesList(safes.safes);
      setSelectedSafeAddress(safes.safes[0]);
    } catch (error) {
      console.log(error);
    }
  }, [address, chainId]);
  const getIsEnabledModule = async (address: string) => {
    if (!signer) return;
    const ethAdapter = new EthersAdapter({ ethers, signerOrProvider: signer });
    setLoadingIsEnabledModule(true);
    const safeSdk = await Safe.create({ ethAdapter, safeAddress: address });
    const isEnabled = await safeSdk.isModuleEnabled(moduleAddressMap[chainId]);
    setLoadingIsEnabledModule(false);
    setIsEnabledModule(isEnabled);
  };
  useEffect(() => {
    getSafesByOwner();
  }, [getSafesByOwner]);
  const onSelectSafeChange = (value: string) => {
    setSelectedSafeAddress(value);
    getIsEnabledModule(value);
  };
  const enableModule = async () => {
    if (!safeSDK) return;
    setLoadingSubmitTransaction(true);
    try {
      const safeTransaction = await safeSDK.createEnableModuleTx(
        moduleAddressMap[chainId]
      );
      const txResponse = await safeSDK.executeTransaction(safeTransaction);
      await txResponse.transactionResponse?.wait();
      setLoadingSubmitTransaction(false);
      setIsEnabledModule(true);
    } catch (error) {
      console.error(error);
      setLoadingSubmitTransaction(false);
    }
  };
  const disableModule = async () => {
    if (!safeSDK) return;
    setLoadingSubmitTransaction(true);
    try {
      const safeTransaction = await safeSDK.createDisableModuleTx(
        moduleAddressMap[chainId]
      );
      const txResponse = await safeSDK.executeTransaction(safeTransaction);
      await txResponse.transactionResponse?.wait();
      setLoadingSubmitTransaction(false);
      setIsEnabledModule(false);
    } catch (error) {
      console.error(error);
      setLoadingSubmitTransaction(false);
    }
  };
  return (
    <div className="mt-12 space-y-6  rounded-2xl">
      <div className="rounded-lg w-full">
        <div className="flex  md:flex-row flex-col  items-center justify-between">
          <div className="flex space-x-3 items-center">
            <Image
              width={32}
              height={32}
              alt={`${name} network`}
              src={`/assets/networks/${logo}.png`}
              className="rounded-full w-10 h-10"
            />
            <p className="text-xl font-medium">{name}</p>
          </div>
          <div className="flex  md:flex-row flex-col space-y-4 md:space-y-0 items-center space-x-4">
            {safesList && safesList?.length > 0 ? (
              <>
                {isEnabledModule ? (
                  <div className="text-blue-500 bg-blue-50 py-1 px-2 rounded-lg">
                    Secured
                  </div>
                ) : (
                  <div className="text-red-400 bg-red-50 py-1 px-2 rounded-lg">
                    Not secured
                  </div>
                )}
                <Select
                  onValueChange={onSelectSafeChange}
                  defaultValue={selectedSafeAddress}
                >
                  <SelectTrigger className="w-48">
                    <SelectValue
                      placeholder={
                        selectedSafeAddress
                          ? addressShortner(selectedSafeAddress)
                          : "Select Safe"
                      }
                    />
                  </SelectTrigger>
                  <SelectContent className=" bg-white">
                    {safesList &&
                      safesList.length > 0 &&
                      safesList.map(address => (
                        <SelectItem key={address} value={address}>
                          {addressShortner(address)}
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
                <button
                  onClick={isEnabledModule ? disableModule : enableModule}
                  className={`py-2 px-4 ${
                    isEnabledModule
                      ? "hover:bg-gray-300 bg-gray-200 text-gray-800"
                      : "hover:bg-blue-700 bg-blue-800 text-white"
                  }  rounded-full flex items-center space-x-2`}
                >
                  {!isEnabledModule && <SoapIcon />}{" "}
                  {connectedChainId !== chainId ? (
                    <p>Connect to {name}</p>
                  ) : selectedSafeAddress ? (
                    loadingIsEnabledModule ? (
                      <p>Loading ...</p>
                    ) : isEnabledModule ? (
                      loadingSubmitTransaction ? (
                        <p>Disabling ...</p>
                      ) : (
                        <p>Disable Safe Module</p>
                      )
                    ) : loadingSubmitTransaction ? (
                      <p>Enabling ...</p>
                    ) : (
                      <p>Enable Safe Module</p>
                    )
                  ) : (
                    <p>Select Safe</p>
                  )}
                </button>
              </>
            ) : (
              <p>No Safe deployed in {name}.</p>
            )}
          </div>
        </div>
      </div>
      {safesList && safesList?.length ? (
        selectedSafeAddress && allowances ? (
          <>
            {allowances.map((allowance: any) => (
              <div key={allowance.token} className="space-y-2">
                <TokenApprovalsTable allowanceData={allowance} />
              </div>
            ))}
          </>
        ) : (
          <p>Select Safe on {name}.</p>
        )
      ) : null}
    </div>
  );
};
