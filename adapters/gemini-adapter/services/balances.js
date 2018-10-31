const httpService = new (require('./http-service'));

class BalancesService {
  getBalances() {
    return httpService.post('/v1/balances', {}).then(result => {
      return result.data;
    });
  }
}

module.exports = BalancesService;
