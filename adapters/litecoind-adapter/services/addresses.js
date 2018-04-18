const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let addressesService = {};

addressesService.listReceivedByAddress = () => {
  let request = {
    method: 'listreceivedbyaddress',
    params: [
      0, true
    ],
    id: 'listreceivedbyaddress'
  };

  return jsonRpcClient.post(request);
});

addressesService.getNewAddress = () => {
  let request = {
    method: 'getnewaddress',
    params: [],
    id: 'getnewaddress'
  };

  return jsonRpcClient.post(request);
});

addressesService.sendToAddress = (targetAddress, amount) => {
  let request = {
    method: 'sendtoaddress',
    params: [targetAddress, amount],
    id: 'sendtoaddress'
  };

  return jsonRpcClient.post(request);
});

module.exports = addressesService;
