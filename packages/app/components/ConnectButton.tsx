"use client";

import { createModal } from "@/context/Web3Modal";

createModal();

export default function ConnectButton() {
  return (
    <div className="flex space-x-4">
      <w3m-button />
      <w3m-network-button />
    </div>
  );
}
