import {bindable} from 'aurelia-templating';
import {InvoicesService} from 'services/invoices';

export class InvoicesList {
  @bindable invoices;

  static inject = [InvoicesService];
  constructor(invoicesService) {
    this.invoicesService = invoicesService;
  }

  attached() {
    return this.getInvoicesList();
  }

  getInvoicesList() {
    return this.invoicesService.getInvoices().then(result => {
      this.invoices = result;
    });
  }
}
