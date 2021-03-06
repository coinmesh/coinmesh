const os = require('os');

class HomedirUtils {
  getPathFromHomeDir(path) {
    let homeDir = os.homedir();
    let newPath = '';

    if (path[0] === '~') {
      newPath = `${homeDir}${path.slice(1)}`;
    } else {
      newPath = path;
    }

    return newPath;
  }
  stripPackageJson(path) {
    let endsInSlash = (path.slice(-1) === '/');
    let containsPackageJson = path.indexOf('package.json') > -1;

    if (containsPackageJson) {
      if (endsInSlash) {
        path = path.slice(0, -1);
      }
      path = path.slice(0, -12);
    }
    return path;
  }
}

module.exports = HomedirUtils;
