import {bindable} from 'aurelia-templating';
import {TransactionsService} from 'services/transactions';
import {Payment} from 'models/payment';

export class SendToAddress {
  @bindable payment = new Payment();

  static inject = [TransactionsService];
  constructor(transactionsService) {
    this.transactionsService = transactionsService;
  }

  pay() {
    return this.transactionsService.sendPayment(this.payment)
  }
}
