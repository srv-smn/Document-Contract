/** @type import('hardhat/config').HardhatUserConfig */
require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require('hardhat-contract-sizer');
require('solidity-coverage') //npx hardhat coverage
require("hardhat-gas-reporter");

module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          }
        }
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
      chainId: 80001.,
      allowUnlimitedContractSize: true,
      blockGasLimit: 100000000429720,
      gas: 'auto',
      gasprice:  'auto'
    },
  },
  contractSizer: {
    alphaSort: true,
    disambiguatePaths: false,
    runOnCompile: true,
    strict: true,
//npx hardhat size-contracts
  },
  // mocha: {
  //   timeout: 100000000
  // },
};
