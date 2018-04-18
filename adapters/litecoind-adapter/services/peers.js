const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

let peersService = {};

peersService.getPeers = () => {
  let request = {
    method: 'getpeers',
    params: [],
    id: 'getpeers'
  };

  return jsonRpcClient.post(request);
};

peersService.addPeer = (node) => {
  let request = {
    method: 'addpeer',
    params: [node, 'add'],
    id: 'addpeer'
  };

  return jsonRpcClient.post(request);
};

peersService.removePeer = (node) => {
  let request = {
    method: 'addpeer',
    params: [node, 'remove'],
    id: 'addpeer'
  };

  return jsonRpcClient.post(request);
};

peersService.testPeerConnection = (node) => {
  let request = {
    method: 'addpeer',
    params: [node, 'onetry'],
    id: 'addpeer'
  };

  return jsonRpcClient.post(request);
};

module.exports = peersService;
