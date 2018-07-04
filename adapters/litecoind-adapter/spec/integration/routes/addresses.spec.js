const app = require('../../../app');
const request = require('supertest');
const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;

describe('Addresses', () => {
  let currencyCode;

  beforeEach(() => {
    currencyCode = 'ltcusd'
  });

  describe('/v0/listaddresses', () => {
    it('responds', (done) => {
      let url = `/v0/directory/`;
      spyOn(fileSystemService, 'createDirectory').and.returnValue(Promise.resolve(true));

      request(app)
        .post(url)
          .send({ path: '/testing' })
          .expect(200)
          .end(function(err, res) {
            expect(fileSystemService.createDirectory).toHaveBeenCalled();
            if (err) throw err;
            done();
          });
    });
  });
});
