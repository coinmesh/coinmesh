import {HttpWrapper} from './http-wrapper';
import {Payment} from 'models/payment';

export class PaymentsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  sendPayment(payment) {
    return this.http.post('/transactions', payment).then(result => {
      return result;
    });
  }
}
