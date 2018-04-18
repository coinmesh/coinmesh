var express = require('express');
var router = express.Router();

/* GET messages */
router.get('/', function(req, res, next) {
  res.json([{ id: 1 }, { id: 2 }]);
});

/* POST create a new message */
router.post('/', function(req, res, next) {
  res.json({ id: 1 });
});

/* POST sign an existing message */
router.post('/sign', function(req, res, next) {
  res.json({ id: 1 });
});

module.exports = router;
