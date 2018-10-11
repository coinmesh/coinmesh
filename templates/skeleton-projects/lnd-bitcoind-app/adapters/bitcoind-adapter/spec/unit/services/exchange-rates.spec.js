const ExchangeRatesService = require('../../../services/exchange-rates');

describe('ExchangeRatesService', () => {
  let exchangeRatesService;

  beforeEach(() => {
    exchangeRatesService = new ExchangeRatesService();
  });

  describe('getExchangeRate()', () => {
    it('gets the current exchange rate', (done) => {
      const currencyPair = 'btcusd';

      exchangeRatesService.getExchangeRate(currencyPair).then(result => {
        expect(result.data.last > 0).toBe(true);
        done();
      });
    });
  });
});
