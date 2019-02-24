const lnd = require('./lnd');
const createInvoice = require('ln-service/createInvoice');
const getInvoice = require('ln-service/getInvoice');
const getInvoices = require('ln-service/getInvoices');
const {subscribeToInvoices} = require('ln-service/lightning');
const log = console.log;

class InvoicesService {
  subscribe() {
    return subscribeToInvoices({lnd});
  }
  createInvoice(invoiceRequest) {
    const {
      description,
      expiresAt,
      tokens,
      internalDescription,
      isFallbackIncluded,
      isFallbackNested,
      secret
    } = invoiceRequest;
    return createInvoice({
      lnd,
      description,
      expires_at: expiresAt,
      tokens,
      internal_description: internalDescription,
      is_fallback_included: isFallbackIncluded,
      is_fallback_nested: isFallbackNested,
      secret
    });
  }
  getInvoice(id) {
    return getInvoice({lnd, id});
  }
  getInvoices() {
    return getInvoices({lnd});
  }
}

module.exports = InvoicesService;
