const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class WalletInfoService {
  getWalletInfo() {
    let request = {
      method: 'getwalletinfo',
      params: [],
      id: 'getwalletinfo'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = WalletInfoService;
