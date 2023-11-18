"use client";

import { createWeb3Modal, defaultConfig } from "@web3modal/ethers5/react";
import { PropsWithChildren } from "react";

// 1. Get projectId
const projectId = "480c176bdaefec0ed8067126818ba2ee";

// 2. Set chains
const mainnet = {
  chainId: 1,
  name: "Ethereum",
  currency: "ETH",
  explorerUrl: "https://etherscan.io",
  rpcUrl: "https://cloudflare-eth.com",
};

const polygon = {
  chainId: 137,
  name: "Polygon",
  currency: "MATIC",
  explorerUrl: "https://polygonscan.io",
  rpcUrl: "https://polygon-rpc.com",
};

// 3. Create modal
const metadata = {
  name: "Onay",
  description: "Avoid risk with Onay revoking protection",
  url: "https://onay.dev",
  icons: ["https://onay.dev/icon"],
};

export const createModal = () =>
  createWeb3Modal({
    ethersConfig: defaultConfig({ metadata }),
    chains: [polygon],
    projectId,
    defaultChain: polygon,
    themeMode: "light",
  });

export function Web3ModalProvider({ children }: PropsWithChildren) {
  return children;
}
