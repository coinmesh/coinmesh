const lnd = require('./lnd');
const getChainBalance = require('ln-service/getChainBalance');
const getChannelBalance = require('ln-service/getChannelBalance');
const getPendingChainBalance = require('ln-service/getPendingChainBalance');

class BalancesService {
  getChainBalance() {
    return getChainBalance({lnd});
  }
  getChannelBalance() {
    return getChannelBalance({lnd});
  }
  getPendingChainBalance() {
    return getPendingChainBalance({lnd});
  }
}

module.exports = BalancesService;
