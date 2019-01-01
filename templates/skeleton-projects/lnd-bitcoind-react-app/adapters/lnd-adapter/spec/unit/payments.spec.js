const getPayments = require('ln-service/getPayments');
const createInvoice = require('ln-service/createInvoice');
const pay = require('ln-service/pay');
const lnd = require('../helpers/setup').lnd;

describe('Payments', () => {
  describe('getPayments()', () => {
    it('get the payments', (done) => {
      getPayments({lnd}).then(result => {
        expect(Array.isArray(result.payments)).toBe(true);
        done();
      });
    });
  });

  // TODO: Update once latest is released
  xdescribe('pay()', () => {
    let invoice;

    beforeEach((done) => {
      let passedInValue = {
        description: 'Fake description',
        expires_at: new Date(),
        lnd,
        tokens: 10000
      };

      createInvoice(passedInValue).then(result => {
        invoice = result.invoice;
        expect(result.description).toBe(passedInValue.description);
        done();
      });
    });

    it('pays the invoice', (done) => {
      let payload = {
        lnd,
        request: invoice
      };

      pay(payload).then(result => {
        // TODO: Finish up the assertion
        // expect(Array.isArray(result.payments)).toBe(true);
        done();
      });
    });
  });
});
