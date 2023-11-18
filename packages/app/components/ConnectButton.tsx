"use client";

import { createModal } from "@/context/Web3Modal";

createModal();

export default function ConnectButton() {
  return (
    <>
      <w3m-button />
      <w3m-network-button />
    </>
  );
}
