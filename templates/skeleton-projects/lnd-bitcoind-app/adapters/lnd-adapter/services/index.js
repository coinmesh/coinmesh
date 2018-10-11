const addressesService = new (require('./addresses'));
const balancesService = new (require('./balances'));
const channelsService = new (require('./channels'));
const cryptoService = new (require('./crypto'));
const invoicesService = new (require('./invoices'));
const networkInfoService = new (require('./network-info'));
const paymentsService = new (require('./payments'));
const peersService = new (require('./peers'));
const transactionsService = new (require('./transactions'));
const walletInfoService = new (require('./wallet-info'));

module.exports = {
  addressesService,
  balancesService,
  channelsService,
  cryptoService,
  invoicesService,
  networkInfoService,
  paymentsService,
  peersService,
  transactionsService,
  walletInfoService
};
