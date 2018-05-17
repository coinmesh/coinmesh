const express = require('express');
const router = express.Router();
const directoryService = new (require('../services/directory'));

router.post('/', (req, res, next) => {
  let path = req.body.path;

  directoryService.createDirectory(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
});

router.get('/:path*?', (req, res, next) => {
  let path = req.params.path || '';
  let extendedPath = req.params[0] || '';

  path = `${path}${ extendedPath ? '/' + extendedPath : '' }`;

  directoryService.getDirectoryContents(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
});

module.exports = router;
