const httpService = new (require('./http-service'));

class TransfersService {
  getTransfers() {
    return httpService.post('/v1/transfers', {}).then(result => {
      return result.data;
    });
  }
}

module.exports = TransfersService;
