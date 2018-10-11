const lnd = require('./lnd');
const getChainTransactions = require('ln-service/getChainTransactions');

class TransactionsService {
  getChainTransactions() {
    return getChainTransactions({lnd});
  }
}

module.exports = TransactionsService;
