const fileSystemService = require('file-system-adapter').fileSystemService;
const pjReadService = require('package-json-adapter').readService;
const pjWriteService = require('package-json-adapter').writeService;
const homedirUtils = new (require('../resources/homedir-utils'));

class ProjectService {
  createProject(project) {
    let path = homedirUtils.getPathFromHomeDir(project.path);
    return fileSystemService.createDirectory(path).then(result => {
      return this.createProjectJson(project);
    });
  }
  createProjectJson(project) {
    let tmpPackageJson = {};

    return this.setValue(tmpPackageJson, 'name', project.name)
      .then(result => {
        return this.setValue(result, 'description', project.description);
      })
      .then(result => {
        return this.setValue(result, 'coinmesh.type', 'project');
      })
      .then(newPackageJson => {
        let path = homedirUtils.getPathFromHomeDir(project.path);
        return pjWriteService.save(`${path}/package.json`, newPackageJson);
      });
  }
  editProjectProperty(projectPath, prop, newValue) {
    return pjReadService.getConfiguration(projectPath).then(packageJson => {
      return this.setValue(packageJson, prop, newValue);
    }).then(newPackageJson => {
      return pjWriteService.save(`${projectPath}/package.json`, newPackageJson);
    });
  }
  setValue(packageJson, path, value) {
    return pjWriteService.setValue(packageJson, path, value, true);
  }
}

module.exports = ProjectService;
