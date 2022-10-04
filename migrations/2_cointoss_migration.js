const CoinToss = artifacts.require("CoinToss");

module.exports = function (deployer) {
  deployer.deploy(CoinToss , "57896044618658097711785492504343953926634992332820282019728792003956564819968");
};
