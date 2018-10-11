const getChainBalance = require('ln-service/getChainBalance');
const getChannelBalance = require('ln-service/getChannelBalance');
const getPendingChainBalance = require('ln-service/getPendingChainBalance');
const lnd = require('../helpers/setup').lnd;

describe('Balances', () => {
  describe('getChainBalance()', () => {
    it('gets the chain balance', (done) => {
      getChainBalance({lnd}).then(result => {
        expect(typeof result.chain_balance).toBe('number');
        done();
      });
    });
  });

  describe('getChannelBalance()', () => {
    it('gets the channel balance', (done) => {
      getChannelBalance({lnd}).then(result => {
        expect(typeof result.channel_balance).toBe('number');
        done();
      });
    });
  });

  describe('getPendingChainBalance()', () => {
    it('gets the pending channel balance', (done) => {
      getPendingChainBalance({lnd}).then(result => {
        expect(typeof result.pending_chain_balance).toBe('number');
        done();
      });
    });
  });
});
