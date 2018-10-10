const express = require('express');
const router = express.Router();
const walletInfoService = require('@coinmesh/litecoind-adapter').walletInfoService;

router.get('/', (req, res, next) => {
  walletInfoService.getWalletInfo().then(result => {
    let data = result.result;
    return res.json(data);
  });
});

module.exports = router;
