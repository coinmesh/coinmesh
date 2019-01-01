const app = require('../../../app');
const request = require('supertest');
const cryptoService = require('../../../index').cryptoService;

describe('CryptoService', () => {
  describe('/v0/crypto/sign', () => {
    it('responds', (done) => {
      let url = `/v0/crypto/sign`;
      spyOn(cryptoService, 'signMessage').and.returnValue(Promise.resolve(true));

      request(app)
        .post(url)
          .send({ path: '/testing' })
          .expect(200)
          .end(function(err, res) {
            expect(cryptoService.signMessage).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/crypto/verify', () => {
    it('responds', (done) => {
      let url = `/v0/crypto/verify`;
      spyOn(cryptoService, 'verifyMessage').and.returnValue(Promise.resolve(true));
      let payload = {
        address: '1',
        signature: '1',
        message: '1'
      }

      request(app)
        .post(url)
          .send(payload)
          .expect(200)
          .end(function(err, res) {
            expect(cryptoService.verifyMessage).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
