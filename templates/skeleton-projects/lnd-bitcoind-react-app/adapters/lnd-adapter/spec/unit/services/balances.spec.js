const BalancesService = require('../../../services/balances');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('BalancesService', () => {
  let balancesService;
  let blocksService;

  beforeEach(() => {
    balancesService = new BalancesService();
    blocksService = new BlocksService();
    return blocksService.generate(1);
  });

  describe('getChainBalance()', () => {
    it('gets the current chain balances', (done) => {
      balancesService.getChainBalance().then(result => {
        expect(typeof result.chain_balance).toBe('number');
        done();
      });
    });
  });

  describe('getChannelBalance()', () => {
    it('gets a new address', (done) => {
      balancesService.getChannelBalance().then(result => {
        expect(typeof result.pending_balance).toBe('number');
        expect(typeof result.channel_balance).toBe('number');
        done();
      });
    });
  });

  describe('getPendingChainBalance()', () => {
    it('gets a new address', (done) => {
      balancesService.getPendingChainBalance().then(result => {
        expect(typeof result.pending_chain_balance).toBe('number');
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
