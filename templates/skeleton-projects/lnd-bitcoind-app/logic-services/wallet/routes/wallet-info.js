const express = require('express');
const router = express.Router();
const walletInfoService = require('@coinmesh/lnd-adapter').walletInfoService;

router.get('/', (req, res, next) => {
  walletInfoService.getWalletInfo().then(result => {
    return res.json(result);
  });
});

module.exports = router;
