const axios = require('axios');

let exchangeRatesService = {};

exchangeRatesService.getExchangeRate = (currencyPair) => {
  return axios.get('https://www.bitstamp.net/api/v2/ticker/ltcusd/');
};

module.exports = exchangeRatesService;
