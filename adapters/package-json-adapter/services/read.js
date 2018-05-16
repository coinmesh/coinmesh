const fs = require('fs')

class ReadService {
  cleanPath(path) {
    const lastChar = path.slice(-1);
    return lastChar === '/' ? path.slice(0, -1) : path;
  }
  getConfiguration(projectPath, encoding = 'utf8') {
    return new Promise((resolve, reject) => {
      fs.readFile(`${projectPath}/package.json`, encoding, (err, data) => {
        if (err) {
          reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  }
}

module.exports = ReadService;
