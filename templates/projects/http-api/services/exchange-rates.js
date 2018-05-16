const axios = require('axios');

class ExchangeRatesService {
  getExchangeRate(currencyPair) {
    return axios.get(`https://www.bitstamp.net/api/v2/ticker/${currencyPair}/`);
  }
}

module.exports = ExchangeRatesService;
