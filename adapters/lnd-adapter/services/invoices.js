const lnd = require('./lnd');
const createInvoice = require('ln-service/createInvoice');
const getInvoice = require('ln-service/getInvoice');
const getInvoices = require('ln-service/getInvoices');

class InvoicesService {
  createInvoice(description, expires_at, tokens) {
    return createInvoice({lnd, description, expires_at, tokens});
  }
  getInvoice(id) {
    return getInvoice({lnd, id});
  }
  getInvoices() {
    return getInvoices({lnd});
  }
}

module.exports = InvoicesService;
