const ChannelsService = require('../../../services/channels');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('ChannelsService', () => {
  let channelsService;
  let blocksService;

  beforeEach(() => {
    channelsService = new ChannelsService();
    blocksService = new BlocksService();
    return blocksService.generate(1);
  });

  // TODO: Spawn a second node to connect to for testing
  xdescribe('openChannel', () => {
    it('gets the channels', (done) => {
      channelsService.openChannel().then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  // TODO: Spawn a second node to connect to for testing
  xdescribe('getChannel', () => {
    it('gets the channels', (done) => {
      channelsService.getChannel(1).then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  // TODO: Spawn a second node to connect to for testing
  xdescribe('closeChannel', () => {
    it('gets the channels', (done) => {
      channelsService.closeChannel(1).then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  describe('getChannels', () => {
    it('gets the channels', (done) => {
      channelsService.getChannels().then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  describe('getClosedChannels', () => {
    it('gets the channels', (done) => {
      channelsService.getClosedChannels().then(result => {
        expect(Array.isArray(result.channels)).toBe(true);
        done();
      });
    });
  });

  describe('getPendingChannels', () => {
    it('gets the channels', (done) => {
      channelsService.getPendingChannels().then(result => {
        expect(Array.isArray(result.pending_channels)).toBe(true);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
