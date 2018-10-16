const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('Transactions', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/transactions/', () => {
    it('responds and returns relevant transactions', (done) => {
      let url = `/v0/transactions/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.transactions)).toBe(true);
            if (err) throw err;
            done();
          });
    });

    // TODO: 'output is dust' due to minrelaytxfee and low fees, need to figure this out
    xit('responds and sends coins to address', (done) => {
      let url = `/v0/transactions/`;
      const fakeAddress = 'mx9et8rjan8kuoA6KH5setVK962VmGJuiZ';

      let payload = {
        address: fakeAddress,
        tokens: 20000,
        sat_per_byte: 1e3
      };

      request(app)
        .post(url)
          .send(payload)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.transactions)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });
});
