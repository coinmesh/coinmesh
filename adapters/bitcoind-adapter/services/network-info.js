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

  getEstimatedFee(blocks = 2) {
    let request = {
      method: 'estimatesmartfee.',
      params: [blocks],
      id: 'estimatesmartfee.'
    };

    return jsonRpcClient.post(request).catch(error => {
      console.error(error)
    });
  }
}

module.exports = NetworkInfoService;

