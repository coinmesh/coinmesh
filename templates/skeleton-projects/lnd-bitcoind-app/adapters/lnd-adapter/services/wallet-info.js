const getWalletInfo = require('ln-service/getWalletInfo');
const createWallet = require('ln-service/createWallet');
const createSeed = require('ln-service/createSeed');
const lnd = require('./lnd');

class WalletInfoService {
  getWalletInfo() {
    return getWalletInfo({lnd});
  }
  createWallet() {
    return createWallet({lnd});
  }
  createSeed() {
    return createSeed({lnd});
  }
}

module.exports = WalletInfoService;
