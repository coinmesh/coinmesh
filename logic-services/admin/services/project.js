const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;
const confFileService = require('@coinmesh/file-system-adapter').confFileService;
const pjReadService = require('@coinmesh/package-json-adapter').readService;
const pjWriteService = require('@coinmesh/package-json-adapter').writeService;
const directoryService = new (require('./directory'));
const homedirUtils = new (require('../resources/homedir-utils'));

class ProjectService {
  createProjectJson(project) {
    let packageJson = {
      name: project.name,
      description: project.description,
      coinmesh: {
        type: 'project',
        adapters: {},
        logicServices: {},
        dataSources: {},
        clientApplications: {}
      }
    };

    let path = homedirUtils.getPathFromHomeDir(project.path);
    return pjWriteService.save(`${path}/package.json`, packageJson);
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
    let command = `cd ./${type}s/${packageName} && npm start`;

    return this.editProjectProperty(projectPath, propertyPath, command);
  }
  addConfigType(projectPath, packageName, type, packagePath) {
    let propertyPath = `coinmesh.${type}s.${packageName}`;
    let newValue = { path: packagePath };

    return this.editProjectProperty(projectPath, propertyPath, newValue);
  }
  getProject(projectPath) {
    let path = homedirUtils.getPathFromHomeDir(projectPath);
    return pjReadService.getConfiguration(path);
  }
  setValue(packageJson, path, value) {
    return pjWriteService.setValue(packageJson, path, value, true);
  }
  checkConfFileExists(packageJsonPath) {
    return pjReadService.getConfigItemByPath(packageJsonPath, 'coinmesh.confFilePath').then(result => {
      let confFilePath = `${packageJsonPath}/${result}`;
      return directoryService.checkFileExists(confFilePath);
    });
  }
  readConfFile(packageJsonPath) {
    let confFilePath = '';
    return pjReadService.getConfigItemByPath(packageJsonPath, 'coinmesh.confFilePath')
      .then(result => {
        confFilePath = `${packageJsonPath}/${result}`;

        return confFileService.readConfFile(confFilePath);
      });
  }
  createConfFile(packageJsonPath) {
    let confFilePath = '';
    return pjReadService.getConfigItemByPath(packageJsonPath, 'coinmesh.confFilePath')
      .then(result => {
        confFilePath = `${packageJsonPath}/${result}`;

        return pjReadService.getConfigItemByPath(packageJsonPath, 'coinmesh.conf.litecoin');
      }).then(jsonResult => {
        return confFileService.writeJsonAsConfFile(confFilePath, jsonResult);
      });
  }

  // TODO: This is a beast, this needs to be broken down
  createProject(project) {
    let path = homedirUtils.getPathFromHomeDir(project.path);

    // create the directory and project json file
    return fileSystemService.createDirectory(path).then(result => {
      return this.createProjectJson(project);
    }).then(result => {
      // create the directories
      return fileSystemService.createDirectories([
        `${path}/adapters`,
        `${path}/logic-services`,
        `${path}/data-sources`,
        `${path}/client-applications`
      ]);
    }).then(result => {
      // copy over the dataSources
      let promises = [];

      if (project.dataSources) {
        project.dataSources.forEach(dataSource => {
          let dataSourcePath = `${process.cwd()}/${dataSource.path}`;
          let newPath = `${path}/data-sources/${dataSource.id}`;

          let promise = fileSystemService.copyAllFilesAndDirectoriesInDirectory(dataSourcePath, newPath);
          promises.push(promise);

          let propName = `coinmesh.dataSources.${dataSource.id}`;
          let updatePackageJsonPromise = this.editProjectProperty(path, propName, newPath);
          promises.push(updatePackageJsonPromise);
        });
      }

      return Promise.all(promises);
    }).then(result => {
      // copy over the adapters
      let promises = [];

      if (project.adapters) {
        project.adapters.forEach(adapter => {
          let adapterPath = `${process.cwd()}/${adapter.path}`;
          let newPath = `${path}/adapters/${adapter.id}`;

          let promise = fileSystemService.copyAllFilesAndDirectoriesInDirectory(adapterPath, newPath);
          promises.push(promise);

          let propName = `coinmesh.adapters.${adapter.id}`;
          let updatePackageJsonPromise = this.editProjectProperty(path, propName, newPath);
          promises.push(updatePackageJsonPromise);
        });
      }

      return Promise.all(promises);
    }).then(result => {
      // copy over the logicServices
      let promises = [];

      if (project.logicServices) {
        project.logicServices.forEach(logicService => {
          let logicServicePath = `${process.cwd()}/${logicService.path}`;
          let newPath = `${path}/logic-services/${logicService.id}`;

          let promise = fileSystemService.copyAllFilesAndDirectoriesInDirectory(logicServicePath, newPath);
          promises.push(promise);

          let propName = `coinmesh.logicServices.${logicService.id}`;
          let updatePackageJsonPromise = this.editProjectProperty(path, propName, newPath);
          promises.push(updatePackageJsonPromise);
        });
      }

      return Promise.all(promises);
    }).then(result => {
      // copy over the clientApplications
      let promises = [];

      if (project.clientApplications) {
        project.clientApplications.forEach(clientApplication => {
          let clientApplicationPath = `${process.cwd()}/${clientApplication.path}`;
          let newPath = `${path}/client-applications/${clientApplication.id}`;

          let promise = fileSystemService.copyAllFilesAndDirectoriesInDirectory(clientApplicationPath, newPath);
          promises.push(promise);

          let propName = `coinmesh.clientApplications.${clientApplication.id}`;
          let updatePackageJsonPromise = this.editProjectProperty(path, propName, newPath);
          promises.push(updatePackageJsonPromise);
        });
      }

      return Promise.all(promises);
    });
  }
}

module.exports = ProjectService;
