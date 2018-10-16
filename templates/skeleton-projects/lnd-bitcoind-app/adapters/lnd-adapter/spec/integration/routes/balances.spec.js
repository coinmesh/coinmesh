const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('Balances', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/balance/', () => {
    it('responds', (done) => {
      let url = `/v0/balance/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(isNaN(res.body.chain_balance)).toBe(false);
            if (err) throw err;
            done();
          });
    });
  });
});
