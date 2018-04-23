const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let balancesService = {};

balancesService.getBalance = (account = '*', confirmations, watchOnly) => {
  let request = {
    method: 'getbalance',
    params: [
      account, confirmations, watchOnly
    ],
    id: 'getbalance'
  };

  return jsonRpcClient.post(request);
};

module.exports = balancesService;
