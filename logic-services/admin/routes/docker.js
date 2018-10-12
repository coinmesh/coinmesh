const express = require('express');
const router = express.Router();
const dockerService = new (require('../services/docker'));

router.post('/run', function(req, res, next) {
  let packageJsonPath = req.body.path;
  let flags = req.body.flags;

  dockerService.dockerRun(packageJsonPath, flags)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/compose', function(req, res, next) {
  let packageJsonPath = req.body.path;
  let flags = req.body.flags || ['up'];
  dockerService.dockerCompose(packageJsonPath, flags)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/compose/status', function(req, res, next) {
  let packageJsonPath = req.body.path;
  let flags = req.body.flags;
  dockerService.dockerComposeStatus(packageJsonPath, flags)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/compose/down', function(req, res, next) {
  let packageJsonPath = req.body.path;
  let flags = req.body.flags;

  dockerService.dockerComposeDown(packageJsonPath, flags)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/build', function(req, res, next) {
  let packageJsonPath = req.body.path;
  let flags = req.body.flags;

  dockerService.dockerBuild(packageJsonPath, flags)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.delete('/kill-process/:uuid', function(req, res, next) {
  let uuid = req.params.uuid;

  dockerService.killProcess(uuid)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

module.exports = router;
