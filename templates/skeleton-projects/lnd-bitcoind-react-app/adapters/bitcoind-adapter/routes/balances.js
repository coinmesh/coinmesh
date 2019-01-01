const express = require('express');
const router = express.Router();
const balancesService = require('../index').balancesService;

router.get('/', (req, res, next) => {
  balancesService.getBalance().then(result => {
    return res.json(result);
  }).catch(error => {
    return res.status(error.status || 500).send(error);
  });
});

module.exports = router;
