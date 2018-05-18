const express = require('express');
const router = express.Router();
const terminalService = new (require('../services/terminal'));

router.post('/npm-link-local', function(req, res, next) {
  let packageJsonPath = req.body.path;

  terminalService.npmLinkLocal(packageJsonPath)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      console.error(error);
      return res.status(500).send({ error: error });
    });
});

router.post('/npm-install', function(req, res, next) {
  let packageJsonPath = req.body.path;

  terminalService.npmInstall(packageJsonPath)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      console.error(error);
      return res.status(500).send({ error: error });
    });
});

router.post('/npm-start', function(req, res, next) {
  let packageJsonPath = req.body.path;

  terminalService.npmStart(packageJsonPath)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      console.error(error);
      return res.status(500).send({ error: error });
    });
});

router.post('/npm-test', function(req, res, next) {
  let packageJsonPath = req.body.path;

  terminalService.npmTest(packageJsonPath)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      console.error(error);
      return res.status(500).send({ error: error });
    });
});

router.delete('/kill-process/:uuid', function(req, res, next) {
  let uuid = req.params.uuid;

  terminalService.killProcess(uuid)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      console.error(error);
      return res.status(500).send({ error: error });
    });
});

module.exports = router;
