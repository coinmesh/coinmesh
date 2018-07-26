const app = require('../../../app');
const request = require('supertest');
const addressesService = require('../../../index');

describe('Addresses', () => {
  let currencyCode;

  beforeEach(() => {
    currencyCode = 'ltcusd'
  });

  describe('/v0/addresses/listaddresses', () => {
    it('responds', (done) => {
      let url = `/v0/addresses/listaddresses/`;
      console.log('-'.repeat(100))
      console.log(new addressesService())
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
});
