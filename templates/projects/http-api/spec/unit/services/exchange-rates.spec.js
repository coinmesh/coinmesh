const ExchangeRatesService = require('../../../services/exchange-rates');

describe('ExchangeRatesService', () => {
  let exchangeRatesService;

  beforeEach(() => {
    exchangeRatesService = new ExchangeRatesService();
  });

  describe('readFile()', () => {
    it('reads and returns a file', (done) => {
      exchangeRatesService.getExchangeRate('ltcusd').then(result => {
        expect(result.data).not.toBe(undefined);
        done();
      });
    });
  });
});
