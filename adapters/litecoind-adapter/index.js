const addressesService = require('./services/addresses');
const blocksService = require('./services/blocks');
const exchangeRatesService = require('./services/exchange-rates');
const messagesService = require('./services/messages');
const nodeService = require('./services/node');
const transactionsService = require('./services/transactions');
const walletService = require('./services/wallet');

module.exports = {
  addressesService,
  blocksService,
  exchangeRatesService,
  messagesService,
  nodeService,
  transactionsService,
  walletService
};
