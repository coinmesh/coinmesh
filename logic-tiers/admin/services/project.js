const fileSystemService = require('file-system-adapter').fileSystemService;
const pjReadService = require('package-json-adapter').readService;
const pjWriteService = require('package-json-adapter').writeService;

class ProjectService {
  createProject(project) {
    let path = project.path;

    return fileSystemService.createDirectory(path).then(result => {
      return this.createProjectJson(project);
    });
  }
  createProjectJson(project) {
    let tmpPackageJson = {};

    return this.setValue(tmpPackageJson, 'name', project.name)
      .then(result => {
        return this.setValue(tmpPackageJson, 'description', project.description);
      })
      .then(result => {
        return this.setValue(tmpPackageJson, 'coinmesh.type', 'project');
      })
      .then(result => {
        return pjWriteService.save(`${project.path}/package.json`, tmpPackageJson);
      });
  }
  editProjectProperty(projectPath, prop, newValue) {
    return pjReadService.getConfiguration(projectPath).then(packageJson => {
      return this.setValue(packageJson, prop, newValue);
    });
  }
  setValue(packageJson, path, value) {
    return pjWriteService.setValue(packageJson, path, value, true);
  }
}

module.exports = ProjectService;
