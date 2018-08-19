const addressesService = new (require('./services/addresses'));
const balancesService = new (require('./services/balances'));
const blocksService = new (require('./services/blocks'));
const cryptoService = new (require('./services/crypto'));
const exchangeRatesService = new (require('./services/exchange-rates'));
const networkInfoService = new (require('./services/network-info'));
const peersService = new (require('./services/peers'));
const transactionsService = new (require('./services/transactions'));
const walletInfoService = new (require('./services/wallet-info'));

module.exports = {
  addressesService,
  balancesService,
  blocksService,
  cryptoService,
  exchangeRatesService,
  networkInfoService,
  peersService,
  transactionsService,
  walletInfoService
};
