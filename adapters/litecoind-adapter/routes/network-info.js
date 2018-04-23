const express = require('express');
const router = express.Router();
const networkInfoService = require('../services/network-info');

router.get('/', (req, res, next) => {
  networkInfoService.getNetworkInfo().then(result => {
    return res.json(result);
  });
});

module.exports = router;
