import {HttpWrapper} from './http-wrapper';
import {Invoice} from 'models/invoice';

export class InvoicesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInvoices() {
    return this.http.get('/invoices').then(result => {
      return result.invoices.map(item => {
        return new Invoice(item);
      });
    });
  }
  getInvoiceById(id) {
    return this.http.get(`/invoices/${id}`).then(result => {
      return new Invoice(item);
    });
  }
  createInvoice(invoice) {
    return this.http.post('/invoices', invoice).then(result => {
      return new Invoice(item);
    });
  }
}
