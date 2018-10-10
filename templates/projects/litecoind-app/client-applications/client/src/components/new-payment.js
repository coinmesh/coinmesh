import {bindable} from 'aurelia-templating';
import {PaymentsService} from 'services/payments';
import {Payment} from 'models/payment';

export class NewPayment {
  @bindable payment;

  static inject = [PaymentsService];
  constructor(paymentsService) {
    this.paymentsService = paymentsService;
  }

  pay() {
    return this.paymentsService.sendPayment(this.payment)
  }
}
