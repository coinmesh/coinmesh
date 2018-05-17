import {HttpWrapper} from './http-wrapper';
import {Balance} from 'models/balance';

export class BalancesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getBalance() {
    let body = { confirmations: 3 };
    return this.http.post('/balances', body).then(result => {
      return new Balance(result);
    });
  }
}
