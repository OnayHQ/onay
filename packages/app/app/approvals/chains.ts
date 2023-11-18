import { NetworkQueryName } from "@/app/approvals/query";

interface Chain {
  name: string;
  queryName: NetworkQueryName;
  chainId: number;
  logo: string;
}

export const chains: Chain[] = [
  {
    name: "Arbitrum",
    queryName: "arbitrum",
    chainId: 42161,
    logo: "arbitrum",
  },
  {
    name: "Gnosis Chain",
    queryName: "gnosis",
    chainId: 100,
    logo: "gnosis",
  },
  {
    name: "Base",
    queryName: "base",
    chainId: 8453,
    logo: "base",
  },
  {
    name: "Celo",
    queryName: "celo",
    chainId: 42220,
    logo: "celo",
  },
  {
    name: "Polygon zkEVM",
    queryName: "polygonzk",
    chainId: 1101,
    logo: "polygon-zk-evm",
  },
  //{ name: "Scroll", chainId: 534352 },
];
