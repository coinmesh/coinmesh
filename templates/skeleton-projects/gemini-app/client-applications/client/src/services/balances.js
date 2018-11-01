import {HttpWrapper} from './http-wrapper';
import {Balance} from 'models/balance';

export class BalancesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getBalance() {
    return this.http.get('/balance').then(result => {
      return new Balance(result);
    });
  }
}
