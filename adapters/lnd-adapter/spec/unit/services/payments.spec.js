const PaymentsService = require('../../../services/payments');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');
const InvoicesService = require('../../../services/invoices');

describe('PaymentsService', () => {
  let paymentsService;
  let blocksService;
  let invoicesService;

  beforeEach(() => {
    paymentsService = new PaymentsService();
    blocksService = new BlocksService();
    invoicesService = new InvoicesService();
  });

  describe('getPayments()', () => {
    it('gets the payments', (done) => {
      paymentsService.getPayments().then(result => {
        expect(Array.isArray(result.payments)).toBe(true);
        done();
      });
    });
  });

  xdescribe('pay()', () => {
    let invoice;

    beforeEach(() => {
      const invoiceRequestObject = {
        description: fakeDescription,
        expiresAt: expiresAt,
        tokens,
        internalDescription: 'test',
        secret: 'testing'
      };

      return invoicesService.createInvoice(invoiceRequestObject, 20001).then(result => {
        invoice = result;
      });
    });

    // TODO: Cannot use an own-generated invoice
    it('pays an invoice', (done) => {
      paymentsService.pay(invoice.request).then(result => {
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
