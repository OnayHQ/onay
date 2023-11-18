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
  },
  etherscan: {
    url: "",
    apiKey: process.env.POLYGONSCAN_API_KEY
  }
};
