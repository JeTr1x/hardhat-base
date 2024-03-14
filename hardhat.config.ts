import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: {
        compilers: [
      {
        version: "0.8.19"
      },
      {
        version: "0.8.20"
      }
    ]
  },
  networks: {
    "katla": {
       url: "https://rpc.katla.taiko.xyz",
       accounts: [process.env.PRIVATE_KEY as string],
       gasPrice: 1500000000,
    },
  },
  etherscan: {
    apiKey: {
      katla: "abc"
    },
    customChains: [
      {
        network: "katla",
        chainId: 167008,
        urls: {
          apiURL: "https://blockscoutapi.katla.taiko.xyz/api?module=contract&action=verify",
          browserURL: "https://explorer.katla.taiko.xyz/"
        }
      }
    ]
  },
  defaultNetwork: 'katla',
};

export default config;
