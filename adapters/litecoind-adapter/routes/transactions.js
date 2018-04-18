var express = require('express');
var router = express.Router();

/* GET transactions */
router.get('/', function(req, res, next) {
  res.json([{ id: 1 }, { id: 2 }]);
});

/* GET transactions that this wallet received */
router.get('/received', function(req, res, next) {
  res.json([{ id: 1 }, { id: 2 }]);
});

/* GET transactions that this wallet sent */
router.get('/sent', function(req, res, next) {
  res.json([{ id: 1 }, { id: 2 }]);
});

/* GET estimated fees for sending */
router.get('/fees', function(req, res, next) {
  res.json({ estimatedFees: 0.001 });
});

module.exports = router;
