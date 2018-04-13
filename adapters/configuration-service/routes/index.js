const express = require('express');
const router = express.Router();
const readFilesService = require('../services/read-files').service;

/* GET stuff. */
router.get('/', (req, res, next) => {
  readFilesService.readFile('/Users/pwkad/.ltcd/ltcd.conf').then(file => {
    res.json(file);
  });
});

module.exports = router;
