const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class TransactionsService {
  getTransactions() {
    let request = {
      method: 'listtransactions',
      params: [],
      id: 'listtransactions'
    };

    return jsonRpcClient.post(request);
  }

  sendToAddress(targetAddress, tokens) {
    let request = {
      method: 'sendtoaddress',
      params: [targetAddress, tokens],
      id: 'sendtoaddress'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = TransactionsService;
