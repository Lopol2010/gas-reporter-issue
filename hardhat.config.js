require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");

extendEnvironment((hre) => {

  hre.ethers.ContractFactory

});

module.exports = {
  solidity: "0.8.4",
};
