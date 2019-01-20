const lnd = require('./lnd');
const getNetworkGraph = require('ln-service/getNetworkGraph');
const getNetworkInfo = require('ln-service/getNetworkInfo');
const getNode = require('ln-service/getNode');

class NetworkInfoService {
  getNetworkGraph() {
    return getNetworkGraph({lnd});
  }
  getNetworkInfo() {
    return getNetworkInfo({lnd});
  }
  getNodeInfo(pubKey) {
    return getNode({lnd, public_key: pubKey});
  }
}

module.exports = NetworkInfoService;

