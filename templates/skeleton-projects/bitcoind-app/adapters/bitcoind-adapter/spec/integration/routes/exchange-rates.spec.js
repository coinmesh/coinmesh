const app = require('../../../app');
const request = require('supertest');
const exchangeRatesService = require('../../../index').exchangeRatesService;

describe('ExchangeRatesService', () => {
  describe('/v0/exchange-rates/:pair/current_rate', () => {
    it('responds', (done) => {
      let url = `/v0/exchange-rates/btcusd/current_rate`;
      spyOn(exchangeRatesService, 'getExchangeRate').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(exchangeRatesService.getExchangeRate).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
