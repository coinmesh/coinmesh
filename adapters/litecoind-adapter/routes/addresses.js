const express = require('express');
const router = express.Router();
const addressesService = require('../services/addresses');

router.get('/listreceivedbyaddress', (req, res, next) => {
  addressesService.listReceivedByAddress().then(result => {
    return res.json(result);
  });
});

router.get('/getnewaddress', (req, res, next) => {
  addressesService.getNewAddress().then(result => {
    return res.json(result);
  });
});

router.post('/sendtoaddress', (req, res, next) => {
  let targetAddress = req.body.address;
  let amount = req.body.amount;

  addressesService.sendToAddress(targetAddress, amount).then(result => {
    return res.json(result);
  });
});

module.exports = router;
