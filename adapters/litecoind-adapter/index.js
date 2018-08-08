const addressesService = require('./services/addresses');
const blocksService = require('./services/blocks');
const exchangeRatesService = require('./services/exchange-rates');
const nodeService = require('./services/node');
const transactionsService = require('./services/transactions');
const walletService = require('./services/wallet-info');

module.exports = {
  addressesService,
  blocksService,
  exchangeRatesService,
  nodeService,
  transactionsService,
  walletService
};
