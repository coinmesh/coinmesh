import {AddressesService} from './addresses';
import {HttpWrapper} from './http-wrapper';

const httpWrapper = new HttpWrapper();
const addressesService = new AddressesService(httpWrapper);

export {
  addressesService,
  httpWrapper
};
