const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let networkInfoService = {};

networkInfoService.getNetworkInfo = () => {
  let request = {
    method: 'getnetworkinfo',
    params: [],
    id: 'getnetworkinfo'
  };

  return jsonRpcClient.post(request);
};

module.exports = networkInfoService;
