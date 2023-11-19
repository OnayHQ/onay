"use client";

import { addressShortner, getSemaphoreColorBasedOnPoints } from "@/utils";
import { ApprovalsListIcon } from "@/components/icons/ApprovalsListIcon";
import { useWeb3ModalAccount } from "@web3modal/ethers5/react";
import { chains } from "@/app/approvals/chains";
import { ChainGroup } from "@/components/ChainGroup";

export default function ApprovalsPage() {
  const { address, isConnected } = useWeb3ModalAccount();
  const randomScoreNumber = Math.floor(Math.random() * (100 - 60 + 1) + 60);
  const pointsColor = getSemaphoreColorBasedOnPoints(randomScoreNumber);

  return (
    <div className="py-12 md:my-16">
      {isConnected ? (
        <div>
          <div className="mb-12">
            <h1 className="text-3xl md:text-5xl font-black">
              {address && addressShortner(address)}
            </h1>
            <div className="bg-gray-200 h-3 rounded-full relative w-full md:w-[24rem] mt-1">
              <div
                className={`bg-${pointsColor}-500 rounded-full h-3`}
                style={{ width: randomScoreNumber + "%" }}
              ></div>
            </div>
            <div className="flex space-x-2 mt-2">
              <p className="font-bold">{randomScoreNumber}</p>
              <p className="font-medium text-gray-600">wallet health score</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <ApprovalsListIcon />
            <span className="bg-yellow-500 bg-red-500 bg-green-500 hidden"></span>
            <h3 className="text-xl md:text-3xl font-bold">Approvals</h3>
          </div>
          <div className="space-y-5 md:space-y-8">
            {chains.map(({ name, queryName, chainId, logo }) => (
              <ChainGroup
                key={chainId}
                queryName={queryName}
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

const NotConnected = () => (
  <div>
    <div>please connect 🙌</div>
  </div>
);
