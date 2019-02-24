const lnd = require('./lnd');
const signMessage = require('ln-service/signMessage');
const verifyMessage = require('ln-service/verifyMessage');

class CryptoService {
  signMessage(message) {
    return signMessage({lnd, message});
  }
  verifyMessage(message, signature) {
    return verifyMessage({lnd, message, signature});
  }
}

module.exports = CryptoService;

