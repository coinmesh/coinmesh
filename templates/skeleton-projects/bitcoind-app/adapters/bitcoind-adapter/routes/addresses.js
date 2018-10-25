const express = require('express');
const router = express.Router();
const addressesService = require('../index').addressesService;

router.post('/listaddresses', (req, res, next) => {
  const minConfirmations = req.body.minConfirmations;
  const includeEmpty = req.body.includeEmpty;
  const includeWatchOnly = req.body.includeWatchOnly;

  addressesService.listReceivedByAddress(
      minConfirmations,
      includeEmpty,
      includeWatchOnly)
  .then(result => {
    return res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

router.get('/getnewaddress/:account_name?', (req, res, next) => {
  const accountName = req.params.account_name;

  addressesService.getNewAddress(accountName).then(result => {
    return res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

router.post('/getreceivedbyaddress', (req, res, next) => {
  const address = req.body.address;
  const minConfirmations = req.body.minConfirmations;

  addressesService.getReceivedByAddress(address, minConfirmations)
    .then(result => res.json(result)).catch(error => {
      return res.status(error.status || 500).send(error);
    });;
});

router.post('/sendtoaddress', (req, res, next) => {
  let targetAddress = req.body.address;
  let amount = req.body.amount;

  addressesService.sendToAddress(targetAddress, amount).then(result => {
    return res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

module.exports = router;
