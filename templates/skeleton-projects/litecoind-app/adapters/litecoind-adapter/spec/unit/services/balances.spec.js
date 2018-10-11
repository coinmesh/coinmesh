const BalancesService = require('../../../services/balances');

describe('BalancesService', () => {
  let balancesService;

  beforeEach(() => {
    balancesService = new BalancesService();
  });

  describe('getBalance()', () => {
    it('gets the balance', (done) => {
      balancesService.getBalance().then(result => {
        expect(result.result > 0).toBe(true);
        done();
      });
    });
  });
});
