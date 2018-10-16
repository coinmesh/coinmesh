const InvoicesService = require('../../../services/invoices');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('InvoicesService', () => {
  const fakeDescription = 'Fake description';
  const expiresAt = new Date();
  const tokens = 20001;

  let invoicesService;
  let blocksService;
  let invoice;
  let invoiceRequestObject;

  beforeEach(() => {
    invoicesService = new InvoicesService();
    blocksService = new BlocksService();

    invoiceRequestObject = {
      description: fakeDescription,
      expiresAt: expiresAt,
      tokens,
      internalDescription: 'test',
      secret: 'testing'
    };

    return invoicesService.createInvoice(invoiceRequestObject).then(result => {
      invoice = result;
    });
  });

  describe('createInvoice()', () => {
    it('creates a new invoice', () => {
      expect(invoice.description).toBe(invoiceRequestObject.description);
    });
  });

  describe('getInvoice()', () => {
    it('gets the network graph', (done) => {
      invoicesService.getInvoice(invoice.id).then(result => {
        expect(result.description).toBe(invoiceRequestObject.description);
        done();
      });
    });
  });

  describe('getInvoices()', () => {
    it('gets the network graph', (done) => {
      invoicesService.getInvoices().then(result => {
        expect(Array.isArray(result.invoices)).toBe(true);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
