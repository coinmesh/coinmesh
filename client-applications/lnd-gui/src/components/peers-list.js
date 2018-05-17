import {bindable} from 'aurelia-templating';
import {PeersService} from 'services/peers';

export class PeersList {
  @bindable peers;

  static inject = [PeersService];
  constructor(peersService) {
    this.peersService = peersService;
  }

  attached() {
    return this.getPeersList();
  }

  getPeersList() {
    return this.peersService.getPeers().then(result => {
      this.peers = result;
    });
  }
  openChannel(peer) {
    // TODO: Route to channels page and pass the peer id
  }
  disconnectPeer(peer) {
    return this.peersService.disconnectPeer(peer)
  }
}
