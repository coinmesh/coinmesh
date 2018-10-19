const fs = require('fs')
const readUtils = new (require('../resources/read-utils'));

class ReadService {
  getConfiguration(projectPath, encoding = 'utf8') {
    const cleanPath = this.cleanPath(projectPath);

    return new Promise((resolve, reject) => {
      fs.readFile(cleanPath, encoding, (err, data) => {
        if (err) {
          return reject(err);
        }
        if (!data) {
          return reject(`No file / directory found.`);
        }
        resolve(JSON.parse(data));
      });
    });
  }
  getConfigItemByPath(projectPath, configItemPath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      this.getConfiguration(projectPath).then(packageJson => {
        const result = readUtils.getValueAtPath(packageJson, configItemPath);
        resolve(result);
      }).catch(error => {
        reject(error);
      });
    });
  }
  cleanPath(path) {
    // TODO: REMOVE LATER - Handle stripped user paths
    if (path.slice(0, 5) === 'Users') {
      path = `/${path}`;
    }
    const lastChar = path.slice(-1);
    return lastChar === '/' ? path.slice(0, -1) : path;
  }
}

module.exports = ReadService;
