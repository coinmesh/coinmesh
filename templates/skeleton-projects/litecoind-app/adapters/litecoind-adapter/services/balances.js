const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class BalancesService {
  getBalance() {
    let request = {
      method: 'getbalance',
      params: [],
      id: 'getbalance'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = BalancesService;
