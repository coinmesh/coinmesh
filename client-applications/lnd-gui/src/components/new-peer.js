import {bindable} from 'aurelia-templating';
import {PeersService} from 'services/peers';

export class NewPeer {
  @bindable value;

  static inject = [PeersService];
  constructor(peersService) {
    this.peersService = peersService;
  }

  connectPeer() {
    let peer = this.newPeer;
    return this.peersService.connectPeer(peer)
  }
}
