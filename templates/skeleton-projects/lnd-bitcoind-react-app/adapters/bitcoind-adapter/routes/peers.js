const express = require('express');
const router = express.Router();
const peersService = require('../index').peersService;

router.get('/getpeerinfo', (req, res, next) => {
  peersService.getPeerInfo().then(result => {
    res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

module.exports = router;
