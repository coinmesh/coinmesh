const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');
const signMessage = require('ln-service/signMessage');
const lnd = require('../../helpers/setup').lnd;

describe('Crypto', () => {
  const fakeMessage = 'ltc';
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/crypto/sign', () => {
    it('responds', (done) => {
      let url = `/v0/crypto/sign`;
      let body = {
        message: fakeMessage
      };

      request(app)
        .post(url)
          .send(body)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(typeof res.body.signature).toBe('string');
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/crypto/verify', () => {
    let signature;

    beforeEach((done) => {
      return signMessage({lnd, message: fakeMessage}).then(result => {
        signature = result.signature;
        done();
      });
    });

    it('responds', (done) => {
      let url = `/v0/crypto/verify`;
      let body = {
        message: fakeMessage,
        signature: signature
      };

      request(app)
        .post(url)
          .send(body)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            if (err) throw err;
            done();
          });
    });
  });
});
