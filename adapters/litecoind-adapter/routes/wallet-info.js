const express = require('express');
const router = express.Router();
const walletInfoService = require('../index').walletInfoService;

router.get('/', (req, res, next) => {
  walletInfoService.getWalletInfo().then(result => {
    return res.json(result);
  });
});

module.exports = router;
