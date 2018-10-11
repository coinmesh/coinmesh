const express = require('express');
const router = express.Router();
const networkInfoService = require('../index').networkInfoService;

router.get('/', (req, res, next) => {
  networkInfoService.getNetworkInfo().then(result => {
    return res.json(result);
  });
});

module.exports = router;
