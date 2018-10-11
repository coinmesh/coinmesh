const TransactionsService = require('../../../services/transactions');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('TransactionsService', () => {
  let transactionsService;
  let blocksService;

  beforeEach(() => {
    transactionsService = new TransactionsService();
    blocksService = new BlocksService();
  });

  describe('getChainTransactions()', () => {
    it('gets the all transactions on chain', (done) => {
      transactionsService.getChainTransactions().then(result => {
        expect(Array.isArray(result.transactions)).toBe(true);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
