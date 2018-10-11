const app = require('../../../app');
const request = require('supertest');
const networkInfoService = require('../../../index').networkInfoService;

describe('NetworkInfosService', () => {
  describe('/v0/network-info', () => {
    it('responds', (done) => {
      let url = `/v0/network-info`;
      spyOn(networkInfoService, 'getNetworkInfo').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(networkInfoService.getNetworkInfo).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
