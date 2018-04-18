const express = require('express');
const router = express.Router();
const { JsonRpcRequest, jsonRpcClient } = require('../services/json-rpc');

router.get('/getwalletinfo', (req, res, next) => {
  walletService.getWallet().then(result => {
    return res.json(result);
  });
});

router.get('/private-keys', (req, res, next) => {
  res.json({ id: 1 });
});

module.exports = router;
