const express = require('express');
const router = express.Router();
const walletInfoService = require('../services/wallet-info');

router.get('/', (req, res, next) => {
  walletInfoService.getWalletInfo().then(result => {
    return res.json(result);
  });
});

module.exports = router;
