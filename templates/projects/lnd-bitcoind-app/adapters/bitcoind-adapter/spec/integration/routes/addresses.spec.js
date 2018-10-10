const app = require('../../../app');
const request = require('supertest');
const addressesService = require('../../../index').addressesService;

describe('Addresses', () => {
  let currencyCode;

  beforeEach(() => {
    currencyCode = 'btcusd'
  });

  describe('/v0/addresses/listaddresses', () => {
    it('responds', (done) => {
      let url = `/v0/addresses/listaddresses/`;
      spyOn(addressesService, 'listReceivedByAddress').and.returnValue(Promise.resolve(true));

      request(app)
        .post(url)
          .send({ path: '/testing' })
          .expect(200)
          .end(function(err, res) {
            expect(addressesService.listReceivedByAddress).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/addresses/getnewaddress', () => {
    it('responds', (done) => {
      let url = `/v0/addresses/getnewaddress/test`;
      spyOn(addressesService, 'getNewAddress').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(addressesService.getNewAddress).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/addresses/sendtoaddress', () => {
    it('responds', (done) => {
      let url = `/v0/addresses/sendtoaddress/`;
      spyOn(addressesService, 'sendToAddress').and.returnValue(Promise.resolve(true));

      request(app)
        .post(url)
          .send({ path: '/testing' })
          .expect(200)
          .end(function(err, res) {
            expect(addressesService.sendToAddress).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
