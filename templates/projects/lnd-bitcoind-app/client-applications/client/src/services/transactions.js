import {HttpWrapper} from './http-wrapper';

export class TransactionsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  sendPayment(payment) {
    const body = {
      address: payment.to_address,
      tokens: payment.amount
    };
    return this.http.post('/transactions', body).then(result => {
      return result;
    });
  }
}
