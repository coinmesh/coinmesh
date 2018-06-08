const express = require('express');
const router = express.Router();
const readFilesService = require('../services/read-files').service;
const {userDirectory} = require('../services/config');

const PATH = `${userDirectory}/Library/Application\ Support/Lnd/lnd.conf`;

router.get('/', (req, res, next) => {
  readFilesService.readFile(PATH).then(file => {
    res.json(file);
  });
});

router.post('/', (req, res, next) => {
  let json = req.body;

  writeFilesService.writeFile(PATH, json).then(file => {
    res.json(file);
  });
});

module.exports = router;
