"use client";

import { addressShortner } from "@/utils";
import { TokenApprovalsTable } from "@/components/TokenApprovalsTable";
import { ApprovalsListIcon } from "@/components/icons/ApprovalsListIcon";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/Select";
import Image from "next/image";
import { SoapIcon } from "../../components/icons/SoapIcon";

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
  // 534352: "https://safe-transaction-zkevm.safe.global/",
};

export default function ApprovalsPage() {
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <div className="py-12 md:my-16">
      {isConnected ? (
        <div>
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black">
              {address && addressShortner(address)}
            </h1>
            <div className="bg-gray-200 h-3 rounded-full relative w-full md:w-[24rem] mt-1">
              <div className="bg-green-500 w-[80%] rounded-full h-3"></div>
            </div>
            <div className="flex space-x-2 mt-2">
              <p className="font-bold">83</p>
              <p className="font-medium text-gray-600">wallet health score</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ApprovalsListIcon />
            <h3 className="text-xl md:text-3xl font-bold">Approvals</h3>
          </div>
          <div className="space-y-24">
            {[
              { name: "Arbitrum", chainId: 42161, logo: "arbitrum" },
              { name: "Base", chainId: 8453, logo: "base" },
              { name: "Celo", chainId: 42220, logo: "celo" },
              { name: "Gnosis Chain", chainId: 100, logo: "gnosis" },
              { name: "Polygon zkEVM", chainId: 1101, logo: "polygon-zk-evm" },
              //{ name: "Scroll", chainId: 534352 },
            ].map(({ name, chainId, logo }) => (
              <ChainGroup
                key={chainId}
                chainId={chainId}
                name={name}
                logo={logo}
              />
            ))}
          </div>
        </div>
      ) : (
        <NotConnected />
      )}
    </div>
  );
}

const ChainGroup = ({
  chainId,
  name,
  logo,
}: {
  chainId: number;
  name: string;
  logo: string;
}) => {
  const { address, chainId: connectedChainId } = useWeb3ModalAccount();
  const { signer } = useWeb3ModalSigner();

  const [safesList, setSafesList] = useState<string[]>();
  const [selectedSafeAddress, setSelectedSafeAddress] = useState<string>();
  const [isEnabledModule, setIsEnabledModule] = useState<boolean>();
  const [safeSDK, setSafeSDK] = useState<Safe>();

  const createSafeSDK = useCallback(async () => {
    if (!signer || !selectedSafeAddress) return;

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    const safeSdk = await Safe.create({
      ethAdapter,
      safeAddress: selectedSafeAddress,
    });
    setSafeSDK(safeSdk);
  }, [selectedSafeAddress, signer]);

  useEffect(() => {
    createSafeSDK();
  }, [createSafeSDK]);

  const getSafesByOwner = useCallback(async () => {
    if (!signer || !address || !chainId) return;

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    const safeApiKit = new SafeApiKit({
      txServiceUrl: safesServicesURLMap[chainId],
      ethAdapter,
    });
    const safes: OwnerResponse = await safeApiKit.getSafesByOwner(address);

    setSafesList(safes.safes);
    setSelectedSafeAddress(safes.safes[0]);
  }, [address, chainId]);

  const getIsEnabledModule = async (address: string) => {
    if (!signer) return;

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    const safeSdk = await Safe.create({
      ethAdapter,
      safeAddress: address,
    });

    const isEnabled = await safeSdk.isModuleEnabled(MODULE_ADDRESS);
    console.log(address, isEnabled);
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

    const safeTransaction = await safeSDK.createEnableModuleTx(
      moduleAddressMap[chainId]
    );
    const txResponse = await safeSDK.executeTransaction(safeTransaction);
    await txResponse.transactionResponse?.wait();

    setIsEnabledModule(true);
  };

  const disableModule = async () => {
    if (!safeSDK) return;

    const safeTransaction = await safeSDK.createDisableModuleTx(
      moduleAddressMap[chainId]
    );
    const txResponse = await safeSDK.executeTransaction(safeTransaction);
    await txResponse.transactionResponse?.wait();

    setIsEnabledModule(false);
  };

  return (
    <div className="mt-12 space-y-6">
      <div className="rounded-lg w-full">
        <div className="flex items-center justify-between">
          <div className="flex space-x-2 items-center">
            <Image
              width={32}
              height={32}
              alt={`${name} network`}
              src={`/assets/networks/${logo}.png`}
              className="rounded-full w-10 h-10"
            />
            <p className="text-xl font-medium">{name}</p>
          </div>
          <div className="flex space-x-4">
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
              className="py-2 px-4 hover:bg-blue-700 bg-blue-800 text-white rounded-full flex items-center space-x-2"
            >
              <SoapIcon />
              {connectedChainId !== chainId ? (
                <p>Connect to {name}</p>
              ) : selectedSafeAddress ? (
                isEnabledModule ? (
                  <p>Disable secure approvals on {name}</p>
                ) : (
                  <p>Secure your approvals on {name}</p>
                )
              ) : (
                <p>Select Safe on {name}</p>
              )}
            </button>
          </div>
        </div>
      </div>
      {selectedSafeAddress ? (
        <div className="space-y-2">
          <TokenApprovalsTable />
          <TokenApprovalsTable />
        </div>
      ) : (
        <p>Select Safe on {name}.</p>
      )}
    </div>
  );
};

const NotConnected = () => (
  <div>
    <div>please connect 🙏</div>
  </div>
);
