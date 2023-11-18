require("@nomicfoundation/hardhat-toolbox");

require('dotenv').config();

module.exports = {
  solidity: "0.8.23",
  networks: {
    ethereum: {
      url: process.env.ETHEREUM_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    polygon: {
      url: process.env.POLYGON_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    gnosis: {
      url: "https://rpc.ankr.com/gnosis",
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    celo: {
      url: process.env.CELO_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    polygonzk: {
      url: process.env.POLYGONZK_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    scroll: {
      url: process.env.SCROLL_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    arbitrum: {
      url: process.env.ARBITRUM_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    base: {
      url: process.env.BASE_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
    linea: {
      url: process.env.LINEA_RPC_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`],
    },
  },
  // etherscan: {
  //   url: "",
  //   apiKey: process.env.GNOSIS_API_KEY
  // },
  etherscan: {
    apiKey: {
      scroll: process.env.SCROLL_API_KEY,
      polygonzk: process.env.POLYGONZK_API_KEY,
      base: process.env.BASE_API_KEY,
      linea: process.env.LINEA_API_KEY,
    },
    customChains: [
      {
        network: "scroll",
        chainId: 534352,
        urls: {
          apiURL: "https://api.scrollscan.com/api",
          browserURL: "https://scrollscan.com"
        },
        
      },
      {
        network: "polygonzk",
        chainId: 1101,
        urls: {
          apiURL: "https://api-zkevm.polygonscan.com/api",
          browserURL: "https://zkevm.polygonscan.com/"
        },
        
      },
      {
        network: "base",
        chainId: 8453,
        urls: {
          apiURL: "https://api.basescan.org/api",
          browserURL: "https://basescan.org"
        },
        
      },
      {
        network: "linea",
        chainId: 59144,
        urls: {
          apiURL: "https://api.lineascan.build/api",
          browserURL: "https://lineascan.build"
        },
        
      }
    ]
  }
};
