"use client";

import { addressShortner } from "@/utils";
import { NetworkHeader } from "@/components/NetworkHeader";
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

const MODULE_ADDRESS = "0xaD1f42682005D378C9dDc5E07103ccD48E87d829";

const safesServicesURLMap: Record<number, string> = {
  1: "https://safe-transaction-mainnet.safe.global",
  137: "https://safe-transaction-polygon.safe.global/",
};

export default function ApprovalsPage() {
  const { address, chainId, isConnected } = useWeb3ModalAccount();
  const { signer } = useWeb3ModalSigner();

  const [safeSDK, setSafeSDK] = useState<Safe>();
  const [ethAdapter, setEthAdapter] = useState<EthersAdapter>();
  const [safesList, setSafesList] = useState<string[]>();
  const [selectedSafeAddress, setSelectedSafeAddress] = useState<string>();
  const [isEnabledModule, setIsEnabledModule] = useState<boolean>();

  const createSafeSDK = useCallback(async () => {
    if (!signer || !selectedSafeAddress || !ethAdapter) return;

    const safeSdk = await Safe.create({
      ethAdapter,
      safeAddress: selectedSafeAddress,
    });
    setSafeSDK(safeSdk);
  }, [ethAdapter, selectedSafeAddress, signer]);

  const getSafesByOwner = useCallback(async () => {
    if (!signer || !address || !chainId) return;

    const ethAdapter = new EthersAdapter({
      ethers,
      signerOrProvider: signer,
    });
    setEthAdapter(ethAdapter);
    const safeApiKit = new SafeApiKit({
      txServiceUrl: safesServicesURLMap[chainId],
      ethAdapter,
    });
    const safes: OwnerResponse = await safeApiKit.getSafesByOwner(address);

    setSafesList(safes.safes);
  }, [address, chainId]);

  const getIsEnabledModule = async (address: string) => {
    if (!ethAdapter) return;
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

  useEffect(() => {
    createSafeSDK();
  }, [createSafeSDK]);

  const enableModule = async () => {
    if (!safeSDK) return;

    const safeTransaction = await safeSDK.createEnableModuleTx(MODULE_ADDRESS);
    const txResponse = await safeSDK.executeTransaction(safeTransaction);
    await txResponse.transactionResponse?.wait();

    setIsEnabledModule(true);
  };

  const disableModule = async () => {
    if (!safeSDK) return;

    const safeTransaction = await safeSDK.createDisableModuleTx(MODULE_ADDRESS);
    const txResponse = await safeSDK.executeTransaction(safeTransaction);
    await txResponse.transactionResponse?.wait();

    setIsEnabledModule(false);
  };

  const onSelectSafeChange = (value: string) => {
    setSelectedSafeAddress(value);
    getIsEnabledModule(value);
  };

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
            <button onClick={isEnabledModule ? disableModule : enableModule}>
              {selectedSafeAddress
                ? isEnabledModule
                  ? "Disable Module"
                  : "Enable Module"
                : "Select Safe"}
            </button>
            <Select
              onValueChange={onSelectSafeChange}
              defaultValue={selectedSafeAddress}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Safe" />
              </SelectTrigger>
              <SelectContent>
                {safesList &&
                  safesList.length > 0 &&
                  safesList.map((address) => (
                    <SelectItem key={address} value={address}>
                      {addressShortner(address)}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
            {["Base", "Gnosis"].map((networkName) => (
              <div className="mt-12 space-y-6" key={networkName}>
                <NetworkHeader name={networkName} color="blue" />
                <div className="space-y-2">
                  <TokenApprovalsTable />
                  <TokenApprovalsTable />
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NotConnected />
      )}
    </div>
  );
}

const NotConnected = () => (
  <div>
    <div>please connect 🙏</div>
  </div>
);
