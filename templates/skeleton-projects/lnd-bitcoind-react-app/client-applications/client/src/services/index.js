import {AddressesService} from './addresses';
import {ChannelsService} from './channels';
import {InvoicesService} from './invoices';
import {PeersService} from './peers';
import {HttpWrapper} from './http-wrapper';

const httpWrapper = new HttpWrapper();
const addressesService = new AddressesService(httpWrapper);
const channelsService = new ChannelsService(httpWrapper);
const invoicesService = new InvoicesService(httpWrapper);
const peersService = new PeersService(httpWrapper);

export {
  addressesService,
  channelsService,
  invoicesService,
  peersService,
  httpWrapper
};
