import {HttpWrapper} from './http-wrapper';
import {Payment} from 'models/payment';

export class PaymentsService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  payInvoice(payment) {
    return this.http.post('/invoices', payment).then(result => {
      return result.invoices.map(item => {
        return new Payment(item);
      });
    });
  }
}
