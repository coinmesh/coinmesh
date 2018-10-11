const PeersService = require('../../../services/peers');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('PeersService', () => {
  let peersService;
  let blocksService;

  beforeEach(() => {
    peersService = new PeersService();
    blocksService = new BlocksService();
  });

  describe('addPeer()', () => {
    let data = {
      socket: 'localhost:1337',
      publicKey: '03cea4d1351308e8b16f8f41b30ab9c4f1072d23fc486e7919dabbe3a59bb65e5e',
    };

    it('does not error when adding a peer', (done) => {
      peersService.addPeer(data.socket, data.publicKey).then(() => {
        // No expectation, result is undefined
        done();
      });
    });
  });

  describe('removePeer()', () => {
    let fakePeerObject = {
      publicKey: '03cea4d1351308e8b16f8f41b30ab9c4f1072d23fc486e7919dabbe3a59bb65e5e',
    };

    it('removes a peer', (done) => {
      peersService.removePeer(fakePeerObject.publicKey).then(result => {
        expect(result).not.toBe(null);
        done();
      }).catch(error => {
        expect(error[1]).toBe('UnexpectedErrorRemovingPeer');
        done();
      });
    });
  });

  describe('getPeers()', () => {
    it('gets connected peers', (done) => {
      peersService.getPeers().then(result => {
        expect(Array.isArray(result.peers)).toBe(true);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
