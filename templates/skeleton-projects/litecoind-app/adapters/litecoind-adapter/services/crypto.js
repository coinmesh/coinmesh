const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class CryptoService {
  signMessage(address, message) {
    let request = {
      method: 'signmessage',
      params: [address, message],
      id: 'signmessage'
    };

    return jsonRpcClient.post(request);
  }

  verifyMessage(address, signature, message) {
    let request = {
      method: 'verifymessage',
      params: [address, signature, message],
      id: 'verifymessage'
    };

    return jsonRpcClient.post(request);
  }
}


module.exports = CryptoService;
