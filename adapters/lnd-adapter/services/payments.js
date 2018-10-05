const lnd = require('./lnd');
const getPayments = require('ln-service/getPayments');
const pay = require('ln-service/pay');

class PaymentsService {
  getPayments() {
    return getPayments({lnd});
  }
  pay(request) {
    return pay({lnd, request});
  }
}

module.exports = PaymentsService;
