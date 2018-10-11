const app = require('../../../app');
const request = require('supertest');
const blocksService = require('../../../index').blocksService;

describe('BlocksService', () => {
  describe('/v0/blocks/:hash', () => {
    let hash;

    beforeEach(() => {
      return blocksService.generate(1).then(result => {
        hash = result.result[0];
      });
    });

    it('responds', (done) => {
      let url = `/v0/blocks/${hash}/info`;
      spyOn(blocksService, 'getBlock').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(blocksService.getBlock).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/blocks/height', () => {
    it('responds', (done) => {
      let url = `/v0/blocks/height`;
      spyOn(blocksService, 'getChainHeight').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(blocksService.getChainHeight).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/blocks/generate', () => {
    it('responds', (done) => {
      let url = `/v0/blocks/generate/1/`;
      spyOn(blocksService, 'generate').and.returnValue(Promise.resolve(true));

      request(app)
        .get(url)
          .expect(200)
          .end(function(err, res) {
            expect(blocksService.generate).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
