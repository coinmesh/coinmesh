import {HttpWrapper} from './http-wrapper';
import {Address} from 'models/address';

export class AddressesService {
  static inject = [HttpWrapper];
  constructor(http) {
    this.http = http;
  }

  createAddress() {
    return this.http.get('/addresses/getnewaddress', {}).then(result => {
      return new Address({ address: result.result });
    });
  }
}
