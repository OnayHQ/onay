"use client";

import { createModal } from "../context/Web3Model";

createModal();

export default function Home() {
  return (
    <main className="p-24">
      <div className="space-y-4">
        <h1 className="font-bold text-6xl">Get back your sleep</h1>
        <h3 className="text-2xl">
          We check the security of your approvals so you don’t have to.
        </h3>

        <w3m-button />
        <w3m-network-button />
      </div>
    </main>
  );
}
