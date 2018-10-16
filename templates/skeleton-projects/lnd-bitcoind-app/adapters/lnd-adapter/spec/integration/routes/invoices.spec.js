const getApp = require('../../../app');
const service = require('ln-service/service');
const request = require('supertest');
const createInvoice = require('ln-service/createInvoice');
const lnd = require('../../helpers/setup').lnd;

describe('Invoices', () => {
  let app;

  beforeAll((done) => {
    return getApp().then(returnedApp => {
      app = returnedApp;
      done();
    });
  });

  describe('/v0/invoices/', () => {
    it('responds', (done) => {
      let url = `/v0/invoices/`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(Array.isArray(res.body.invoices)).toBe(true);
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/invoices/:id', () => {
    let invoice;
    const numOfTokens = 10000;

    beforeEach(() => {
      invoiceData = {
        description: 'Fake description',
        expires_at: new Date(),
        lnd,
        tokens: numOfTokens
      }

      return createInvoice(invoiceData).then(result => {
        invoice = result;
      });
    });

    it('responds', (done) => {
      let url = `/v0/invoices/${invoice.request}`;

      request(app)
        .get(url)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(res.body.tokens).toBe(numOfTokens);
            if (err) throw err;
            done();
          });
    });
  });

  describe('/v0/invoices/', () => {
    it('responds', (done) => {
      const numOfTokens = 10000;
      const expiresAt = 123;
      let url = `/v0/invoices/`;

      let body = {
        description: 'Fake description',
        expires_at: expiresAt,
        is_fallback_included: false,
        tokens: numOfTokens,
      };

      request(app)
        .post(url)
          .send(body)
          .set('Authorization', 'Basic cnBjdXNlcjpycGNwYXNzd29yZA==')
          .expect(200)
          .end(function(err, res) {
            expect(res.body.tokens).toBe(numOfTokens);
            if (err) throw err;
            done();
          });
    });
  });
});
