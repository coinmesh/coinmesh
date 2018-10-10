const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class NetworkInfoService {
  getNetworkInfo() {
    let request = {
      method: 'getnetworkinfo',
      params: [],
      id: 'getnetworkinfo'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = NetworkInfoService;
