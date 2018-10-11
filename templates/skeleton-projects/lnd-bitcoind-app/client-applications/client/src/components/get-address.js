import {AddressesService} from 'services/addresses';

export class GetAddress {
  newAddress;

  static inject = [AddressesService];
  constructor(addressesService) {
    this.addressesService = addressesService;
  }

  createAddress() {
    return this.addressesService.createAddress().then(result => {
      this.newAddress = result;
    });
  }
}
