const express = require('express');
const router = express.Router();
const exchangeRatesService = require('../index').exchangeRatesService;

router.get('/:pair/current_rate', function(req, res, next) {
  let currencyPair = req.params.pair;

  exchangeRatesService.getExchangeRate(currencyPair).then(result => {
    return res.json(result.data);
  }).catch(error => {
    return res.error(error);
  });
});

module.exports = router;
