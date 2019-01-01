const getApp = require('../../../app');
const request = require('supertest');

const addressFormats = require('ln-service/lightning/conf/address_formats.json');
const defaultFormat = Object.keys(addressFormats).find(key => addressFormats[key] === 1);

describe('Addresses', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/addresses/', () => {
    it('responds when format is passed', (done) => {
      let url = `/v0/addresses`;

      request(app)
        .post(url)
          .send({ format: defaultFormat })
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(typeof res.body.address).toBe('string');
            if (err) throw err;
            done();
          });
    });

    it('responds when no format is passed', (done) => {
      let url = `/v0/addresses`;

      request(app)
        .post(url)
          .send({ format: defaultFormat })
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(typeof res.body.address).toBe('string');
            if (err) throw err;
            done();
          });
    });
  });
});
