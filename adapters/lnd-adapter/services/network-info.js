const lnd = require('./lnd');
const getNetworkGraph = require('ln-service/getNetworkGraph');
const getNetworkInfo = require('ln-service/getNetworkInfo');

class NetworkInfoService {
  getNetworkGraph() {
    return getNetworkGraph({lnd});
  }
  getNetworkInfo() {
    return getNetworkInfo({lnd});
  }
}

module.exports = NetworkInfoService;
