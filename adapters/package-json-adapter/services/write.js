const fs = require('fs')
const readUtils = new (require('../resources/read-utils'));
const writeUtils = new (require('../resources/write-utils'));

class WriteService {
  setValue(tempPackageJson, configItemPath, value, allowCreate = false) {
    return new Promise((resolve, reject) => {
      const result = readUtils.getValueAtPath(tempPackageJson, configItemPath);

      if (!allowCreate && (result === undefined || result === null)) {
        reject(`Cannot set value as method called with allowCreate = false.`);
      }

      let newPackageJson = writeUtils.setValueAtPath(tempPackageJson, configItemPath, value);

      resolve(newPackageJson);
    });
  }
  save(path, packageJson, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      let configFile = JSON.stringify(packageJson, null, 2);
      fs.writeFile(path, configFile, encoding, (err) => {
        if (err) {
          reject(err);
        }
        resolve(true);
      });
    });
  }
}

module.exports = WriteService;
