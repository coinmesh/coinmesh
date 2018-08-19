const app = require('../../../app');
const request = require('supertest');
const balancesService = require('../../../index').balancesService;
const blocksService = require('../../../index').blocksService;

describe('BalancesService', () => {
  describe('/v0/balances/', () => {
    beforeEach(() => {
      return blocksService.generate(1);
    });

    it('responds', (done) => {
      let url = `/v0/balances/`;
      spyOn(balancesService, 'getBalance').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(balancesService.getBalance).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
