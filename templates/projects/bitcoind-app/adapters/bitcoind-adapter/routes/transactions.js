const express = require('express');
const router = express.Router();
const transactionsService = require('../index').transactionsService;

router.get('/', (req, res, next) => {
  transactionsService.getTransactions().then(result => {
    res.json(result);
  });
});

router.post('/', (req, res, next) => {
  let targetAddress = req.body.address;
  let tokens = req.body.amounts;

  transactionsService.sendToAddress(targetAddress, tokens).then(result => {
    res.json(result);
  });
});

module.exports = router;
