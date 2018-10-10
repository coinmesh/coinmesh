import {bindable} from 'aurelia-templating';
import {AddressesService} from 'services/addresses';
import {Address} from 'models/address';

export class AddressesList {
  @bindable addresses;
  @bindable newAddress = new Address();

  static inject = [AddressesService];
  constructor(addressesService) {
    this.addressesService = addressesService;
  }
}
