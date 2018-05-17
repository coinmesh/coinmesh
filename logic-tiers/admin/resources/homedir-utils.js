const os = require('os');

class HomedirUtils {
  getPathFromHomeDir(path) {
    let homeDir = os.homedir();
    let newPath = '';

    if (path[0] === '~') {
      newPath = `${homeDir}${path.slice(1)}`;
    }

    return newPath;
  }
}

module.exports = HomedirUtils;
