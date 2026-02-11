import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    polygon_amoy: {
      url: "https://rpc-amoy.polygon.technology/",
      accounts: [process.env.PRIVATE_KEY as string]
    },
    polygon_mainnet: {
      url: "https://polygon-rpc.com/",
      accounts: [process.env.PRIVATE_KEY as string]
    }
  },
  etherscan: {
    apiKey: {
      polygonAmoy: process.env.POLYGONSCAN_API_KEY as string
    }
  }
};

export default config;
