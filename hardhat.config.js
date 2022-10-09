/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require('hardhat-contract-sizer');

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
      }
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
        allowUnlimitedContractSize: true,
     }
    ,
    Mumbai: {
      url: process.env.MUMBAI,
      accounts: [`0x${process.env.ACCOUNT1}`, `0x${process.env.ACCOUNT2}`],
      chainId: 5,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
//npx hardhat size-contracts
  }
};
