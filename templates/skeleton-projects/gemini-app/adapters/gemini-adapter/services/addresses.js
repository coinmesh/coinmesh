const httpService = new (require('./http-service'));

class AddressesService {
  getAddress(currency, label) {
    return httpService.post(`/v1/deposit/${currency}/newAddress`, {label}).then(result => {
      return result.data;
    });
  }
}

module.exports = AddressesService;
