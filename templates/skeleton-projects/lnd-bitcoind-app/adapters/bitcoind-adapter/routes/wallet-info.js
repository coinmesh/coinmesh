const express = require('express');
const router = express.Router();
const walletInfoService = require('../index').walletInfoService;

router.get('/', (req, res, next) => {
  walletInfoService.getWalletInfo().then(result => {
    return res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

module.exports = router;
