const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;
const pjReadService = require('@coinmesh/package-json-adapter').readService;
const pjWriteService = require('@coinmesh/package-json-adapter').writeService;
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
  addScript(projectPath, packageName, type) {
    let propertyPath = `scripts.${packageName}`;
    let command = `cd ./${type}/${packageName} && npm start`;

    return this.editProjectProperty(projectPath, propertyPath, command);
  }
  addConfigType(projectPath, packageName, type, packagePath) {
    let propertyPath = `coinmesh.${type}s.${packageName}`;
    let newValue = { path: packagePath };

    return this.editProjectProperty(projectPath, propertyPath, newValue);
  }
  setValue(packageJson, path, value) {
    return pjWriteService.setValue(packageJson, path, value, true);
  }
}

module.exports = ProjectService;
