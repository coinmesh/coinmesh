class ReadUtils {
  getValueAtPath(packageJson, path) {
    let keys = path.split('.');
    let currentObject = packageJson;

    keys.forEach(key => {
      if (!currentObject || !currentObject[key]) {
        currentObject = null;
        return null;
      } else {
        currentObject = currentObject[key];
      }
    });

    return currentObject;
  }
}

module.exports = ReadUtils;
