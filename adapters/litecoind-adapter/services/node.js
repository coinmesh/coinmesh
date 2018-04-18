let nodeService = {};

nodeService.getNetworkInfo = () => {
  let request = {
    method: 'getnetworkinfo',
    params: [],
    id: 'getnetworkinfo'
  };

  return jsonRpcClient.post(request);
};

nodeService.getPeerInfo = () => {
  let request = {
    method: 'getpeerinfo',
    params: [],
    id: 'getpeerinfo'
  };

  return jsonRpcClient.post(request);
};

module.exports = nodeService;
