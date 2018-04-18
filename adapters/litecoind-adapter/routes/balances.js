const express = require('express');
const router = express.Router();
const balancesService = require('../services/balances');

router.post('/', (req, res, next) => {
  let account = req.body.account;
  let confirmations = req.body.confirmations;
  let watchOnly = req.body.watchOnly;

  balancesService.getBalance(account, confirmations, watchOnly).then(result => {
    return res.json(result);
  });
});

module.exports = router;
