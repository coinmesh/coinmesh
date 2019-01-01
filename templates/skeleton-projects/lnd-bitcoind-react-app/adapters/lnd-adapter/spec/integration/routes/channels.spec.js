const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('Channels', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/channels/', () => {
    it('responds', (done) => {
      let url = `/v0/channels/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.channels)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });

  // TODO: Add a channel first
  xdescribe('/v0/channels/', () => {
    it('responds', (done) => {
      const fakeId = '123';
      let url = `/v0/channels/${fakeId}`;

      request(app)
        .delete(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            // TODO: Add a real assertion here
            if (err) throw err;
            done();
          });
    });
  });

  // TODO: Add a channel first
  xdescribe('/v0/channels/', () => {
    it('opens a new channel', (done) => {
      const fakeId = '123';
      let url = `/v0/channels/`;
      const body = {
        partner_public_key: '123',
        local_tokens: 100000
      };

      request(app)
        .post(url)
          .send(body)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            // TODO: verify the response
            // expect(Array.isArray(res.body.channels)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });
});
