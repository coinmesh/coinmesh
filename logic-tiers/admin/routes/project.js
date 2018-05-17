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
      return res.error(error);
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

module.exports = router;
