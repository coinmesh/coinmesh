const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');

// TODO: Cannot send a payment via rest currently?
xdescribe('Payments', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/payments/', () => {
    it('responds', (done) => {
      let url = `/v0/payments/`;
      let body = {
        fee: 1,
        request: 'test'
      };

      request(app)
        .post(url)
          .send(body)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            // TODO: Add real assertion here
            // expect(Array.isArray(res.body.send)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });
});
