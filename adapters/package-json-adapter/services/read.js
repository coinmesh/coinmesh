const fs = require('fs')
const readUtils = new (require('../resources/read-utils'));

class ReadService {
  getConfiguration(projectPath, encoding = 'utf8') {
    const cleanPath = this.cleanPath(projectPath);
    let finalPath = `${cleanPath}${cleanPath.indexOf('package.json') > -1 ? '' : '/package.json'}`;

    return new Promise((resolve, reject) => {
      fs.readFile(finalPath, encoding, (err, data) => {
        if (err) {
          reject(err);
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
