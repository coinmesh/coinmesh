const express = require('express');
const router = express.Router();
const exchangeRatesService = require('../services/exchange-rates');

router.get('/:pair/current_rate', function(req, res, next) {
  let targetAddress = req.params.address;

  exchangeRatesService.getExchangeRate(currencyPair).then(result => {
    return res.json(result.data);
  }).catch(error => {
    return res.error(error);
  });
});

module.exports = router;
