const NetworkInfoService = require('../../../services/network-info');
const BlocksService = require('../../../../bitcoind-adapter/services/blocks');

describe('NetworkInfoService', () => {
  let networkInfoService;
  let blocksService;

  beforeEach(() => {
    networkInfoService = new NetworkInfoService();
    blocksService = new BlocksService();
  });

  describe('getNetworkInfo()', () => {
    it('gets the network info', (done) => {
      networkInfoService.getNetworkInfo().then(result => {
        expect(typeof result.average_channel_size).toBe('number');
        done();
      });
    });
  });

  describe('getNetworkGraph()', () => {
    it('gets the network graph', (done) => {
      networkInfoService.getNetworkGraph().then(result => {
        expect(Array.isArray(result.nodes)).toBe(true);
        done();
      });
    });
  });

  afterEach(() => {
    return blocksService.generate(1);
  });
});
