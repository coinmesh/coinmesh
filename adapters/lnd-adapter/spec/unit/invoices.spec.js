const createInvoice = require('ln-service/createInvoice');
const getInvoice = require('ln-service/getInvoice');
const getInvoices = require('ln-service/getInvoices');
const lnd = require('../helpers/setup').lnd;

describe('Invoices', () => {
  describe('createInvoice()', () => {
    it('creates a new invoice', (done) => {
      let passedInValue = {
        description: 'Fake description',
        expires_at: new Date(),
        lnd,
        tokens: 10000
      };

      createInvoice(passedInValue).then(result => {
        expect(result.description).toBe(passedInValue.description);
        done();
      });
    });
  });

  describe('getInvoice()', () => {
    let invoice;

    beforeEach(() => {
      invoiceData = {
        description: 'Fake description',
        expires_at: new Date(),
        lnd,
        tokens: 10000
      };

      return createInvoice(invoiceData).then(result => {
        invoice = result;
      });
    });

    it('gets an invoice by id', (done) => {
      let invoiceRequest = {
        lnd,
        id: invoice.id
      };

      getInvoice(invoiceRequest).then(result => {
        expect(result.description).toBe(invoice.description);
        done();
      });
    });
  });

  describe('getInvoices()', () => {
    it('gets all invoices', (done) => {
      getInvoices({lnd}).then(result => {
        expect(Array.isArray(result.invoices)).toBe(true);
        done();
      });
    });
  });
});
