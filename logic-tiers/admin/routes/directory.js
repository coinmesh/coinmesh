const express = require('express');
const router = express.Router();
const directoryService = new (require('../services/directory'));

router.post('/', function(req, res, next) {
  let path = req.body.path;

  directoryService.createDirectory(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.error(error);
    });
});

module.exports = router;
