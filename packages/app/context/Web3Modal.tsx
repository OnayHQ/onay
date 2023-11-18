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

const arbitrum = {
  chainId: 42161,
  name: "Arbitrum",
  currency: "ETH",
  explorerUrl: "https://arbiscan.io/",
  rpcUrl: "https://rpc.ankr.com/arbitrum",
};
const base = {
  chainId: 8453,
  name: "Base",
  currency: "ETH",
  explorerUrl: "https://basescan.org/",
  rpcUrl: "https://base.meowrpc.com",
};
const celo = {
  chainId: 42220,
  name: "Celo",
  currency: "CELO",
  explorerUrl: "https://explorer.celo.org/mainnet/",
  rpcUrl: "https://rpc.ankr.com/celo",
};
const gnosisChain = {
  chainId: 100,
  name: "Gnosis Chain",
  currency: "xDAI",
  explorerUrl: "https://gnosisscan.io/",
  rpcUrl: "https://rpc.ankr.com/gnosis",
};
const polygonZkEvm = {
  chainId: 1101,
  name: "Polygon zkEVM",
  currency: "ETH",
  explorerUrl: "https://zkevm.polygonscan.com/",
  rpcUrl: "https://polygon-zkevm.drpc.org",
};
const scroll = {
  chainId: 534352,
  name: "Scroll",
  currency: "ETH",
  explorerUrl: "https://scroll.io/rollupscan",
  rpcUrl: "https://1rpc.io/scroll",
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
    chains: [arbitrum, base, celo, gnosisChain, polygonZkEvm, scroll],
    projectId,
    defaultChain: arbitrum,
    themeMode: "light",
  });

export function Web3ModalProvider({ children }: PropsWithChildren) {
  return children;
}
