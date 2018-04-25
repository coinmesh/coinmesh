import {AddressesService} from 'services/addresses';

export class Receive {
  addresses = [];

  static inject = [AddressesService];
  constructor(addressesService) {
    this.addressesService = addressesService;
  }
  getNewAddress() {
    return this.addressesService.createAddress().then(result => {
      this.addresses.push(result);
    });
  }
}
