const express = require('express');
const router = express.Router();
const peersService = require('../services/peers');

router.get('/', (req, res, next) => {
  peersService.getPeers().then(result => {
    res.json(result);
  });
});

router.post('/', (req, res, next) => {
  let node = req.body.node;

  peersService.addPeer(node).then(result => {
    res.json(result);
  });
});

router.post('/try', (req, res, next) => {
  let node = req.body.node;

  peersService.testPeerConnection(node).then(result => {
    res.json(result);
  });
});

router.delete('/:node', (req, res, next) => {
  let node = req.params.node;

  peersService.removePeer(node).then(result => {
    res.json(result);
  });
});

module.exports = router;
