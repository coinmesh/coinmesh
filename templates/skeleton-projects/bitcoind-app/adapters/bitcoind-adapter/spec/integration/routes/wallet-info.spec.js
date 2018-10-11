const app = require('../../../app');
const request = require('supertest');
const walletInfoService = require('../../../index').walletInfoService;

describe('WalletInfosService', () => {
  describe('/v0/wallet-info/', () => {
    it('responds', (done) => {
      let url = `/v0/wallet-info/`;
      spyOn(walletInfoService, 'getWalletInfo').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(walletInfoService.getWalletInfo).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
