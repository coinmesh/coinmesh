import {HttpWrapper} from './http-wrapper';
import {ExchangeRate} from 'models/exchange-rate';

export class ExchangeRateService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getInfo() {
    return this.http.get('/exchange-rates/ltc/current-rate').then(result => {
      return new NetworkInfo(result);
    });
  }
}
