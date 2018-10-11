const InvoicesService = require('../../../services/invoices');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('InvoicesService', () => {
  let invoicesService;
  let blocksService;
  let invoice;
  let data;

  beforeEach(() => {
    invoicesService = new InvoicesService();
    blocksService = new BlocksService();

    data = {
      description: 'Fake description',
      expires_at: new Date(),
      tokens: 20001
    };

    return invoicesService.createInvoice(data.description, data.expires_at, data.tokens).then(result => {
      invoice = result;
    });
  });

  describe('createInvoice()', () => {
    it('creates a new invoice', () => {
      expect(invoice.description).toBe(data.description);
    });
  });

  describe('getInvoice()', () => {
    it('gets the network graph', (done) => {
      invoicesService.getInvoice(invoice.id).then(result => {
        expect(result.description).toBe(data.description);
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
