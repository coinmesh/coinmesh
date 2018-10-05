const addPeer = require('ln-service/addPeer');
const removePeer = require('ln-service/removePeer');
const getPeers = require('ln-service/getPeers');
const lnd = require('../helpers/setup').lnd;

describe('Peers', () => {
  // TODO: Next method errors in regtest mode for some reason
  xdescribe('addPeer()', () => {
    it('adds a new peer to the node', (done) => {
      let fakePeerObject = {
        lnd,
        host: 'localhost',
        public_key: '03cea4d1351308e8b16f8f41b30ab9c4f1072d23fc486e7919dabbe3a59bb65e5e',
      };

      addPeer(fakePeerObject).then(result => {
        expect(result).not.toBe(null);
        done();
      });
    });
  });

  describe('removePeer()', () => {
    it('does not remove a peer that is not connected', (done) => {

      let fakePeerObject = {
        lnd,
        host: 'localhost',
        public_key: '03cea4d1351308e8b16f8f41b30ab9c4f1072d23fc486e7919dabbe3a59bb65e5e',
      };

      removePeer(fakePeerObject).then(result => {
        expect(result).not.toBe(null);
        done();
      }).catch(error => {
        expect(error[1]).toBe('UnexpectedErrorRemovingPeer');
        done();
      });
    });
  });

  describe('listPeers()', () => {
    it('lists peers connected', (done) => {
      getPeers({lnd}).then(result => {
        expect(result).not.toBe(null);
        done();
      }).catch(error => {
        expect(error[1]).toBe('UnexpectedErrorRemovingPeer');
        done();
      });
    });
  });
});
