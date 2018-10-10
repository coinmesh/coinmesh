const express = require('express');
const router = express.Router();
const exchangeRatesService = new (require('../services/exchange-rates'));

router.get('/:pair/current-rate', function(req, res, next) {
  let targetAddress = req.params.address;
  let currencyPair = req.params.pair;

  exchangeRatesService.getExchangeRate(currencyPair)
    .then(result => {
      return res.json(result.data);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

module.exports = router;
