"use client";

import { addressShortner } from "@/utils";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";

export default function ApprovalsPage() {
  const { address, isConnected } = useWeb3ModalAccount();

  return (
    <div className="py-12 md:my-16">
      {isConnected ? (
        <div>
          <div className="mb-12">
            <h1 className="text-3xl md:text-6xl font-black">
              {addressShortner(address)}
            </h1>
            <div className="bg-gray-200 h-3 rounded-full relative w-full md:w-[30rem] mt-1">
              <div className="bg-green-500 w-[80%] rounded-full h-3"></div>
            </div>
            <div className="flex space-x-2 mt-2">
              <p className="font-bold">83</p>
              <p className="font-medium text-gray-600">wallet health score</p>
            </div>
          </div>
          <h3 className="text-lg md:text-2xl font-bold mb-4">Approvals</h3>
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
