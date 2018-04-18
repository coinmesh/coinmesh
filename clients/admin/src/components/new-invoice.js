import {bindable} from 'aurelia-templating';
import {InvoicesService} from 'services/invoices';
import {Invoice} from 'services/invoices';

export class NewInvoice {
  @bindable invoice;

  static inject = [InvoicesService];
  constructor(invoicesService) {
    this.invoicesService = invoicesService;
  }

  createInvoice() {
    let invoice = this.invoice;
    return this.invoicesService.createInvoice(invoice)
  }
}
