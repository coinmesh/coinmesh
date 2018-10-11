import {bindable} from 'aurelia-templating';
import {TransactionsService} from 'services/transactions';

export class SendToAddress {
  @bindable payment;

  static inject = [TransactionsService];
  constructor(transactionsService) {
    this.transactionsService = transactionsService;
  }

  pay() {
    return this.transactionsService.sendPayment(this.payment)
  }
}
