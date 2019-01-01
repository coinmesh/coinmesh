const express = require('express');
const router = express.Router();
const transactionsService = require('../index').transactionsService;

router.get('/', (req, res, next) => {
  transactionsService.getTransactions().then(result => {
    res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

router.post('/', (req, res, next) => {
  let targetAddress = req.body.address;
  let tokens = req.body.tokens;

  transactionsService.sendToAddress(targetAddress, tokens).then(result => {
    res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

module.exports = router;
