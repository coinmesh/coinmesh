const BalancesService = require('../../../services/balances');

const currencyList = [
  'BTC',
  'USD',
  'ETH',
  'BCH',
  'LTC',
  'ZEC'
];

describe('BalancesService', () => {
  let balancesService;

  beforeEach(() => {
    balancesService = new BalancesService();

    // Don't get rate limited by Gemini
    return new Promise((res, rej) => {
      setTimeout(() => {
        res();
      }, 500);
    });
  });

  describe('getBalances()', () => {
    it('gets the balances for each currency', (done) => {
      balancesService.getBalances().then(result => {
        const foundCurrencies = result.map(currencyBalance => {
          return currencyBalance.currency;
        });

        currencyList.forEach(currency => {
          expect(foundCurrencies.indexOf(currency.toUpperCase()) > -1).toBe(true);
        });
        done();
      });
    });
  });
});
