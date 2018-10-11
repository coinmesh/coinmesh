const getChannel = require('ln-service/getChannel');
const openChannel = require('ln-service/openChannel');
const closeChannel = require('ln-service/closeChannel');
const getChannels = require('ln-service/getChannels');
const getClosedChannels = require('ln-service/getClosedChannels');
const getPendingChannels = require('ln-service/getPendingChannels');
const lnd = require('../helpers/setup').lnd;

describe('Channels', () => {
  xdescribe('getChannel()', () => {
    it('gets a channel by id', (done) => {
      let fakeId = 123;

      let passedInValue = {
        id: fakeId,
        lnd
      };

      getChannel(passedInValue).then(result => {
        expect(typeof result.address).toBe('string');
        done();
      });
    });
  });

  xdescribe('closeChannel()', () => {
    it('closes a channel by id', (done) => {
      let fakeId = 123;

      let passedInValue = {
        id: fakeId,
        lnd
      };

      closeChannel(passedInValue).then(result => {
        expect(typeof result.id).toBe('string');
        done();
      });
    });
  });

  describe('getChannels()', () => {
    it('gets all channels', (done) => {
      getChannels({lnd}).then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  describe('getClosedChannels()', () => {
    it('gets inactive channels', (done) => {
      let passedInValue = {
        lnd,
        inactive_since: new Date()
      };
      getClosedChannels(passedInValue).then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  describe('getPendingChannels()', () => {
    it('gets pending channels', (done) => {
      getPendingChannels({lnd}).then(result => {
        expect(Array.isArray(result.pending_channels)).toBe(true);
        done();
      });
    });
  });

  // TODO: Create another node to connect to
  xdescribe('openChannel()', () => {
    beforeEach(() => {

    });

    let address = '';
    const log = () => {};
    const tokens = 10000;

    it('opens a channel to another node', (done) => {
      openChannel({lnd}).then(result => {
        expect(typeof result.address).toBe('string');
        done();
      });
    });
  });
});
