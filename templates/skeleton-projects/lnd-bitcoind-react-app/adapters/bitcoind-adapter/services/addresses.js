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

  getNewAddress(addressType = "bech32") {
    let request = {
      method: 'getnewaddress',
      params: [null, addressType],
      id: 'getnewaddress'
    };

    return jsonRpcClient.post(request);
  }

  importAddress(address, label = 'Watched Addresses', reScan = false) {
    let request = {
      method: 'importaddress',
      params: [
        address, label, reScan
      ],
      id: 'importaddress'
    };

    return jsonRpcClient.post(request);
  }

  async getReceivedByAddress(address, minConfirmations = 0) {
    await this.importAddress(address);

    let request = {
      method: 'getreceivedbyaddress',
      params: [
        address, minConfirmations
      ],
      id: 'getreceivedbyaddress'
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
