const express = require('express');
const router = express.Router();
const projectService = new (require('../services/project'));
const Project = require('../models/project');

router.post('/', function(req, res, next) {
  let project = new Project(req.body);

  projectService.createProject(project)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/clone', function(req, res, next) {
  let project = new Project(req.body);
  projectService.cloneProject(project)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.patch('/', function(req, res, next) {
  let projectPath = req.body.projectPath;
  let propertyPath = req.body.propertyPath;
  let newValue = req.body.value;

  projectService.editProjectProperty(projectPath, propertyPath, newValue)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/scripts/', function(req, res, next) {
  let projectPath = req.body.projectPath;
  let packageName = req.body.packageName;
  let type = req.body.type;

  projectService.addScript(projectPath, packageName, type)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/config/:type', function(req, res, next) {
  let projectPath = req.body.projectPath;
  let packageName = req.body.packageName;
  let type = req.params.type;
  let packagePath = req.params.packagePath;

  projectService.addConfigType(projectPath, packageName, type, packagePath)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(500).send({ error: error });
    });
});

router.post('/load', (req, res, next) => {
  let path = req.body.path;

  projectService.getProject(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
});

router.post('/check-conf-file-exists', (req, res, next) => {
  let path = req.body.path;

  projectService.checkConfFileExists(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
});

router.post('/read-conf-file', (req, res, next) => {
  let path = req.body.path;

  projectService.readConfFile(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
});

router.post('/create-conf-file', (req, res, next) => {
  let path = req.body.path;

  projectService.createConfFile(path)
    .then(result => {
      return res.json(result);
    }).catch(error => {
      return res.status(error.status || 500).send(error);
    });
});

module.exports = router;
