const lnd = require('./lnd');
const createChainAddress = require('ln-service/createChainAddress');
const sendToChainAddress = require('ln-service/sendToChainAddress');

const addressFormats = require('ln-service/lightning/conf/address_formats.json');
const defaultFormat = Object.keys(addressFormats).find(key => addressFormats[key] === 1);
const minFee = 1;

class AddressesService {
  getNewAddress(format = defaultFormat) {
    return createChainAddress({format, lnd});
  }
  sendToAddress(address, amount) {
    let payload = {
      address,
      tokens: amount,
      lnd,
      fee_tokens_per_vbyte: minFee,
      target_confirmations: 1
    };

    return sendToChainAddress(payload);
  }
}

module.exports = AddressesService;
