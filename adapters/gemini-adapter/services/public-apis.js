const httpService = new (require('./http-service'));

class PublicApisService {
  getSymbols() {
    return httpService.get('/v1/symbols').then(result => {
      return result.data;
    });
  }
  getTicker(symbol) {
    return httpService.get(`/v1/pubticker/${symbol}`).then(result => {
      return result.data;
    });
  }
  getCurrentOrderBook(symbol) {
    return httpService.get(`/v1/book/${symbol}`).then(result => {
      return result.data;
    });
  }
  getTradeHistory(symbol) {
    return httpService.get(`/v1/trades/${symbol}`).then(result => {
      return result.data;
    });
  }
  getCurrentAuction(symbol) {
    return httpService.get(`/v1/auction/${symbol}`).then(result => {
      return result.data;
    });
  }
  getAuctionHistory(symbol) {
    return httpService.get(`/v1/auction/${symbol}/history`).then(result => {
      return result.data;
    });
  }
}

module.exports = PublicApisService;
