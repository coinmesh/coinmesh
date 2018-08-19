const app = require('../../../app');
const request = require('supertest');
const peersService = require('../../../index').peersService;

describe('PeersService', () => {
  describe('/v0/peers/getpeerinfo', () => {
    it('responds', (done) => {
      let url = `/v0/peers/getpeerinfo`;
      spyOn(peersService, 'getPeerInfo').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(peersService.getPeerInfo).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
