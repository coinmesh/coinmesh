let walletService = {};

walletService.getWalletInfo = () => {
  let request = {
    method: 'getwalletinfo',
    params: [],
    id: 'getwalletinfo'
  };

  return jsonRpcClient.post(request);
};

module.exports = walletService;
