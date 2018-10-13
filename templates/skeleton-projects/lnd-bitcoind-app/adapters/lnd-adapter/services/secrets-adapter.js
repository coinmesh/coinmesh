const {existsSync} = require('fs');

const readService = require('@coinmesh/package-json-adapter').readService;
const writeService = require('@coinmesh/package-json-adapter').writeService;

const fileSystemService = require('@coinmesh/file-system-adapter').fileSystemService;

const homedirUtils = new (require('./homedir-utils'));
const path = homedirUtils.getPathFromHomeDir('./secrets.json');

module.exports = {
  getPassword() {
    return readService.getConfigItemByPath(path, 'password').then(result => {
      return result;
    });
  },
  savePassword(password) {
    const propPath = 'password';
    const allowCreate = true;

    return this.saveProperty(propPath, password).then(result => {
      console.log('='.repeat(100))
      console.log(result)
      return result;
    });
  },
  saveSeed(seed) {
    const propPath = 'seed';
    const allowCreate = true;

    return this.saveProperty(propPath, seed).then(result => {
      console.log('='.repeat(100))
      console.log(result)
      return result;
    });
  },
  saveProperty(prop, newValue) {
    console.log('chekcing')
    return fileSystemService.checkFileExists(path).then(exists => {
      console.log('='.repeat(100))
      console.log(exists);
      if (exists) {
        console.log('reading')
        return readService.getConfiguration(path);
      }
      console.log('not reading')
      return Promise.resolve({});
    }).then(packageJson => {
      return writeService.setValue(packageJson, prop, newValue, true);
    }).then(newPackageJson => {
      return writeService.save(path, newPackageJson);
    });
  }
}
