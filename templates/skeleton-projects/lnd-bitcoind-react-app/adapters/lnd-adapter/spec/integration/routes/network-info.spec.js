const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('NetworkInfo', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/network_info/', () => {
    it('responds', (done) => {
      let url = `/v0/network_info/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(isNaN(res.body.channel_count)).toBe(false);
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/network_info/graph', () => {
    it('responds', (done) => {
      let url = `/v0/network_info/graph`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.nodes)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });
});
