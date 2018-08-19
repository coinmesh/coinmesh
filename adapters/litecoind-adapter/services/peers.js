const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class PeersService {
  getPeerInfo() {
    let request = {
      method: 'getpeerinfo',
      params: [],
      id: 'getpeerinfo'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = PeersService;
