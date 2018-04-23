const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  walletService.getWallet().then(result => {
    return res.json(result);
  });
});

module.exports = router;
