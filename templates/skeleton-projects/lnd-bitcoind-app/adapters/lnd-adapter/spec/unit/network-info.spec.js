const getNetworkGraph = require('ln-service/getNetworkGraph');
const getNetworkInfo = require('ln-service/getNetworkInfo');
const lnd = require('../helpers/setup').lnd;

describe('NetworkInfo', () => {
  describe('getNetworkGraph()', () => {
    it('gets the network graph', (done) => {
      getNetworkGraph({lnd}).then(result => {
        expect(Array.isArray(result.nodes)).toBe(true);
        done();
      });
    });
  });

  describe('getNetworkInfo()', () => {
    it('gets the network info', (done) => {
      getNetworkInfo({lnd}).then(result => {
        expect(typeof result.channel_count).toBe('number');
        done();
      });
    });
  });
});
