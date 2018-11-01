const express = require('express');
const router = express.Router();
const balancesService = require('@coinmesh/gemini-adapter').balancesService;
const findService = require('@coinmesh/mongodb-adapter').findService;
const insertService = require('@coinmesh/mongodb-adapter').insertService;
const updateService = require('@coinmesh/mongodb-adapter').updateService;

class Balance {
  constructor(data) {
    this.amount = data.amount;
    this.available = data.available;
    this.availableForWithdrawal = data.availableForWithdrawal;
    this.currency = data.currency;
    this.type = data.type;
  }
}

router.get('/', (req, res, next) => {
  balancesService.getBalances().then(geminiBalances => {
    console.log('='.repeat(100))
    console.log(geminiBalances)

    const balances = geminiBalances.map(geminiBalance => {
      return new Balance(geminiBalance);
    });

    findService.find('balances').then(mongoBalances => {
      if (!mongoBalances) {
        console.log('INSERTING balances')
        insertService.insertMany('balances', balances);
      } else {
        console.log('UPDATING balances')
        mongoBalances.forEach(mongoBalance => {
          const newBalance = balances.find(balance => balance.currency = mongoBalance.currency);

          updateService.updateById('balances', mongoBalance, newBalance);
        });
      }
      return res.json(balances);
    });
  });
});

module.exports = router;
