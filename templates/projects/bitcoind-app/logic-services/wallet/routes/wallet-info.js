const express = require('express');
const router = express.Router();
const walletInfoService = require('@coinmesh/bitcoind-adapter').walletInfoService;

router.get('/', (req, res, next) => {
  walletInfoService.getWalletInfo().then(result => {
    let data = result.result;
    return res.json(data);
  });
});

module.exports = router;
