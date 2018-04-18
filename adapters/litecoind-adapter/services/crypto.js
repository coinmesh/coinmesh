const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let cryptoService = {};

cryptoService.signMessage = (address, message) => {
  let request = {
    method: 'signmessage',
    params: [address, message],
    id: 'signmessage'
  };

  return jsonRpcClient.post(request);
};

cryptoService.verifyMessage = (address, signature, message) => {
  let request = {
    method: 'verifymessage',
    params: [address, signature, message],
    id: 'verifymessage'
  };

  return jsonRpcClient.post(request);
};

module.exports = cryptoService;
