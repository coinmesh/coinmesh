class ReadUtils {
  getValueAtPath(packageJson, path) {
    let keys = path.split('.');
    let currentObject = packageJson;

    keys.forEach(key => {
      currentObject = currentObject[key];
    });

    return currentObject;
  }
}

module.exports = ReadUtils;
