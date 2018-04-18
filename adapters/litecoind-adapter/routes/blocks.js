var express = require('express');
var router = express.Router();

/* GET blocks */
router.get('/', function(req, res, next) {
  res.json([{ id: 1 }, { id: 2 }]);
});

/* GET current block height */
router.get('/height', function(req, res, next) {
  res.json({ id: 1123123 });
});

module.exports = router;
