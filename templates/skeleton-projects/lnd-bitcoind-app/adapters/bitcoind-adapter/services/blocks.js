const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

class BlocksService {
  getBlock(hash) {
    let request = {
      method: 'getblock',
      params: [hash],
      id: 'getblock'
    };

    return jsonRpcClient.post(request);
  }

  getChainHeight() {
    let request = {
      method: 'getblockcount',
      params: [],
      id: 'getblockcount'
    };

    return jsonRpcClient.post(request);
  }

  generate(numberOfBlocks = 101) {
    let request = {
      method: 'generate',
      params: [
        numberOfBlocks
      ],
      id: 'generate'
    };

    return jsonRpcClient.post(request);
  }
}

module.exports = BlocksService;
