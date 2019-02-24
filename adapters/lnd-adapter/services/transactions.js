const lnd = require('./lnd');
const getChainTransactions = require('ln-service/getChainTransactions');
const {subscribeToTransactions} = require('ln-service/lightning');
const {log} = console;

class TransactionsService {
  subscribe(wss) {
    if (!wss) {
      throw new Error('No web socket server found.');
    }
    subscribeToTransactions({lnd, log, wss});
  }
  getChainTransactions() {
    return getChainTransactions({lnd});
  }
}

module.exports = TransactionsService;
