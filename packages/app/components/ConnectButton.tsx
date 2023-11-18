"use client";

import { useWeb3Modal } from "@web3modal/ethers5/react";

export default function ConnectButton() {
  const { open } = useWeb3Modal();

  return (
    <>
      <button
        onClick={() => {
          console.log("click modal");
          open();
        }}
      >
        Open Connect Modal
      </button>
      |
      <button
        onClick={() => {
          console.log("click networks modal");
          open({ view: "Networks" });
        }}
      >
        Open Network Modal
      </button>
    </>
  );
}
