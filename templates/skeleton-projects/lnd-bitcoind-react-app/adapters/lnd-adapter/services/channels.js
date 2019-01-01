const lnd = require('./lnd');
const getChannel = require('ln-service/getChannel');
const closeChannel = require('ln-service/closeChannel');
const getChannels = require('ln-service/getChannels');
const getClosedChannels = require('ln-service/getClosedChannels');
const getPendingChannels = require('ln-service/getPendingChannels');
const openChannel = require('ln-service/openChannel');

class ChannelsService {
  getChannel(id) {
    return getChannel({lnd, id});
  }
  closeChannel(id) {
    return closeChannel({lnd, id});
  }
  getChannels() {
    return getChannels({lnd});
  }
  getClosedChannels() {
    return getClosedChannels({lnd});
  }
  getPendingChannels() {
    return getPendingChannels({lnd});
  }
  openChannel(targetNodePublicKey, localTokens, giveTokens = 0, fee = 1e3) {
    const params = {
      chain_fee_tokens_per_vbyte: fee,
      give_tokens: giveTokens,
      local_tokens: localTokens,
      partner_public_key: targetNodePublicKey,
      lnd
    };
    return openChannel(params);
  }
}

module.exports = ChannelsService;
