const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let transactionsService = {};

transactionsService.getTransactions = () => {
  let request = {
    method: 'gettransactions',
    params: [],
    id: 'gettransactions'
  };

  return jsonRpcClient.post(request);
};

transactionsService.sendToAddress = (targetAddress, tokens) => {
  let request = {
    method: 'sendtoaddress',
    params: [targetAddress, tokens],
    id: 'sendtoaddress'
  };

  return jsonRpcClient.post(request);
};

module.exports = transactionsService;
