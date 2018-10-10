const express = require('express');
const router = express.Router();
const blocksService = require('../index').blocksService;

/* GET blocks */
router.get('/:hash/info', function(req, res, next) {
  const hash = req.params.hash;

  blocksService.getBlock(hash).then(result => {
    return res.json(result);
  });
});

/* GET current block height */
router.get('/height', function(req, res, next) {
  blocksService.getChainHeight().then(result => {
    return res.json(result);
  });
});

/* GET generate blocks */
router.get('/generate/:num_of_blocks', function(req, res, next) {
  const numberOfBlocks = req.params.num_of_blocks;

  blocksService.generate(numberOfBlocks).then(result => {
    return res.json(result);
  });
});

module.exports = router;
