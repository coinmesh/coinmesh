const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class AddressesService {
  listReceivedByAddress(minConfirmations = 0, includeEmpty = true, includeWatchOnly = false) {
    let request = {
      method: 'listreceivedbyaddress',
      params: [
        minConfirmations, includeEmpty, includeWatchOnly
      ],
      id: 'listreceivedbyaddress'
    };

    return jsonRpcClient.post(request);
  }

  getNewAddress(accountName = '') {
    let request = {
      method: 'getnewaddress',
      params: [accountName],
      id: 'getnewaddress'
    };

    return jsonRpcClient.post(request);
  }

  sendToAddress(targetAddress, amount) {
    let request = {
      method: 'sendtoaddress',
      params: [targetAddress, amount],
      id: 'sendtoaddress'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = AddressesService;
