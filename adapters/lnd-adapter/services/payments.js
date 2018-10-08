const lnd = require('./lnd');
const getPayments = require('ln-service/getPayments');
const pay = require('ln-service/pay');

class PaymentsService {
  getPayments() {
    return getPayments({lnd});
  }
  pay(request, fee) {
    return pay({lnd, request, fee});
  }
}

module.exports = PaymentsService;
