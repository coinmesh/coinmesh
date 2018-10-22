const {existsSync} = require('fs');

const readService = require('@coinmesh/package-json-adapter').readService;
const writeService = require('@coinmesh/package-json-adapter').writeService;

const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;

const homedirUtils = new (require('./homedir-utils'));
const path = homedirUtils.getPathFromHomeDir('./secrets.json');

module.exports = {
  getPassword() {
    return fileSystemService.checkFileExists(path).then(exists => {
      if (exists) {
        return readService.getConfigItemByPath(path, 'password').then(result => {
          return result;
        });
      }
      return Promise.resolve(null);
    });
  },
  savePassword(password) {
    const propPath = 'password';
    const allowCreate = true;

    return this.saveProperty(propPath, password).then(result => {
      return result;
    });
  },
  saveSeed(seed) {
    const propPath = 'seed';
    const allowCreate = true;

    return this.saveProperty(propPath, seed).then(result => {
      return result;
    });
  },
  saveProperty(prop, newValue) {
    return fileSystemService.checkFileExists(path).then(exists => {
      if (exists) {
        return readService.getConfiguration(path);
      }
      return Promise.resolve({});
    }).then(packageJson => {
      return writeService.setValue(packageJson, prop, newValue, true);
    }).then(newPackageJson => {
      return writeService.save(path, newPackageJson);
    });
  }
}
