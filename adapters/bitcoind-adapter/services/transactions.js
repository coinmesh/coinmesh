const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class TransactionsService {
  getUnspentByAddress(addresses) {
    if (!addresses) {
      throw new Error('addresses parameter required.');
    }
    if (!addresses &&!Array.isArray(addresses)) {
      addresses = [addresses];
    }

    let request = {
      method: 'listunspent',
      params: [1, null, addresses],
      id: 'listunspent'
    };

    return jsonRpcClient.post(request);
  }

  createRawTransaction(inputs, outputs, locktime = null) {
    let request = {
      method: 'createrawtransaction',
      params: [inputs, outputs, locktime],
      id: 'createrawtransaction'
    };

    return jsonRpcClient.post(request);
  }

  decodeRawTransaction(transactionHexString) {
    let request = {
      method: 'decoderawtransaction',
      params: [transactionHexString],
      id: 'decoderawtransaction'
    };

    return jsonRpcClient.post(request);
  }

  signRawTransaction(transactionHexString) {
    let request = {
      method: 'signrawtransaction',
      params: [transactionHexString],
      id: 'signrawtransaction'
    };

    return jsonRpcClient.post(request);
  }

  sendRawTransaction(transactionHexString) {
    let request = {
      method: 'sendrawtransaction',
      params: [transactionHexString, false],
      id: 'sendrawtransaction'
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

