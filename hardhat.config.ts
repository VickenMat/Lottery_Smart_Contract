import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

// new stuff
// npm install --save-dev @nomicfoundation/hardhat-chai-matchers
import "@nomicfoundation/hardhat-chai-matchers";

const config: HardhatUserConfig = {
  solidity: "0.8.17",
};

export default config;
