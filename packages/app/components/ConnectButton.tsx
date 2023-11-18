"use client";

import { createModal } from "@/context/Web3Modal";

createModal();
import Safe from "@safe-global/protocol-kit";

export default function ConnectButton() {
  return (
    <div className="flex space-x-4">
      <w3m-button />
      <w3m-network-button />
    </div>
  );
}
