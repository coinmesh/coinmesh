const app = require('../../../app');
const request = require('supertest');

describe('ExchangeRates', () => {
  let currencyCode;

  beforeEach(() => {
    currencyCode = 'ltcusd'
  });

  describe('/v0/exchange-rates', () => {
    it('responds', (done) => {
      let url = `/v0/exchange-rates/${currencyCode}/current_rate`;

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            if (err) throw err;
            done();
          });
    });
  });
});
