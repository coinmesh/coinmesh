import {Address} from '../models/address';

export class AddressesService {
  constructor(http) {
    this.http = http;
  }

  createAddress() {
    return this.http.post('/addresses/', {}).then(result => {
      return new Address({ address: result.address });
    });
  }
}
