const express = require('express');
const router = express.Router();
const registryService = new (require('../services/registry'));

const readRegistry = (name, res, pathOverride) => {
  let path = pathOverride ? `${pathOverride}/registry.json` : `../../${name}/registry.json`;

  registryService.readRegistry(path)
    .then(result => {
      return res.send(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
};

router.get('/client-applications', (req, res, next) => {
  return readRegistry('client-applications', res);
});

router.get('/logic-services', (req, res, next) => {
  return readRegistry('logic-services', res);
});

router.get('/adapters', (req, res, next) => {
  return readRegistry('adapters', res);
});

router.get('/data-sources', (req, res, next) => {
  return readRegistry('data-sources', res);
});

router.get('/skeleton-projects', (req, res, next) => {
  let path = '../../templates/skeleton-projects';
  return readRegistry('skeleton-projects', res, path);
});

module.exports = router;
