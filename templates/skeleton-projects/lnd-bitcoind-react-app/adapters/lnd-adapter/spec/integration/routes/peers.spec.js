const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

describe('Peers', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/peers/', () => {
    it('responds and lists peers', (done) => {
      let url = `/v0/peers/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.peers)).toBe(true);
            if (err) throw err;
            done();
          });
    });

    // TODO: Add a second peer to connect to instead of just self
    xit('responds and adds a peer', (done) => {
      let url = `/v0/peers/`;
      let body = {
        socket: 'localhost:9735',
        public_key: '028a70d272a60c174aeddf7c4734150e85cb1b7f2cbc9f6bc71a19989e3d221493'
      };

      request(app)
        .post(url)
          .send(body)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            if (err) throw err;
            done();
          });
    });

    // TODO: Add a second peer to connect to
    xit('responds and removes a peer', (done) => {
      const peerId = '028a70d272a60c174aeddf7c4734150e85cb1b7f2cbc9f6bc71a19989e3d221493';
      let url = `/v0/peers/${peerId}`;

      request(app)
        .delete(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            if (err) throw err;
            done();
          });
    });
  });
});
