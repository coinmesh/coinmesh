const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('WalletInfo', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/wallet_info/', () => {
    it('responds', (done) => {
      let url = `/v0/wallet_info/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(res.body.type).toBe('wallet');
            if (err) throw err;
            done();
          });
    });
  });
});
