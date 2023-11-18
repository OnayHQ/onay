"use client";

import { SoapIcon } from "@/components/icons/SoapIcon";
import Image from "next/image";

export const NetworkHeader = ({ name }: { name: string; color: string }) => (
  <div className="rounded-lg w-full">
    <div className="flex items-center justify-between">
      <div className="flex space-x-2 items-center">
        <Image
          width={32}
          height={32}
          alt="base network"
          src={`/assets/networks/${name}.png`}
          className="rounded-full w-10 h-10"
        />
        <p className="text-xl font-medium">{name}</p>
      </div>
      <button className="py-2 px-4 hover:bg-blue-700 bg-blue-800 text-white rounded-full flex items-center space-x-2">
        <SoapIcon />
        <p>Secure your approvals on {name}</p>
      </button>
    </div>
  </div>
);
