"use client";

import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { addressShortner } from "@/utils";
import { NetworkHeader } from "@/components/NetworkHeader";
import { TokenApprovalsTable } from "@/components/TokenApprovalsTable";
import { ApprovalsListIcon } from "@/components/icons/ApprovalsListIcon";

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
            {["Base", "Gnosis"].map(networkName => (
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
