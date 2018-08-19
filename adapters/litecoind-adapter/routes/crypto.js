const express = require('express');
const router = express.Router();
const cryptoService = require('../index').cryptoService;

router.post('/sign', function(req, res, next) {
  let address = req.body.address;
  let message = req.body.message;

  cryptoService.signMessage(address, message).then(result => {
    res.json(result);
  });
});

router.post('/verify', function(req, res, next) {
  let address = req.body.address;
  let signature = req.body.signature;
  let message = req.body.message;

  cryptoService.verifyMessage(address, signature, message).then(result => {
    res.json(result);
  });
});

module.exports = router;
