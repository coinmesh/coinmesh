const express = require('express');
const router = express.Router();
const balancesService = require('../index').balancesService;

router.get('/', (req, res, next) => {
  balancesService.getBalance().then(result => {
    return res.json(result);
  });
});

module.exports = router;
