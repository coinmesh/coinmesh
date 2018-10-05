const lnd = require('./lnd');
const addPeer = require('ln-service/addPeer');
const removePeer = require('ln-service/removePeer');
const getPeers = require('ln-service/getPeers');

class PeersService {
  addPeer(socket, publicKey) {
    return addPeer({lnd, socket, public_key: publicKey});
  }
  removePeer(publicKey) {
    return removePeer({lnd, public_key: publicKey});
  }
  getPeers() {
    return getPeers({lnd});
  }
}

module.exports = PeersService;
