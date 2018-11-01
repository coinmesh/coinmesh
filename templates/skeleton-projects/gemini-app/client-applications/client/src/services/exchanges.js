import {HttpWrapper} from './http-wrapper';
import {ExchangeRate} from 'models/exchange-rate';

export class ExchangeRatesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  getCurrentRate(currencyCode) {
    return this.http.post(`/${currencyCode}/current_rate`).then(result => {
      return new ExchangeRate(result);
    });
  }
}
