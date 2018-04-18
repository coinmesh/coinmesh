const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let walletInfoService = {};

walletInfoService.getWalletInfo = () => {
  let request = {
    method: 'getwalletinfo',
    params: [],
    id: 'getwalletinfo'
  };

  return jsonRpcClient.post(request);
};

module.exports = walletInfoService;
