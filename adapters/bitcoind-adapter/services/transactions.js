const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class TransactionsService {
  getUnspentByAddress(address, minConfs = 1) {
    let request = {
      method: 'listunspent',
      params: [minConfs, null, address],
      id: 'listunspent'
    };

    return jsonRpcClient.post(request);
  }

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
