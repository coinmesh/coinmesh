import {bindable} from 'aurelia-templating';
import {PaymentsService} from 'services/payments';
import {Invoice} from 'services/payments';

export class NewPayment {
  @bindable payment;
  @bindable invoice;

  static inject = [PaymentsService];
  constructor(paymentsService) {
    this.paymentsService = paymentsService;
  }

  payInvoice() {
    let invoice = this.invoice;
    return this.paymentsService.payInvoice(invoice)
  }
}
