class WriteUtils {
  setValueAtPath(packageJson, path, value) {
    let keys = path.split('.');
    let currentObject = packageJson;
    let newPackageJson = Object.assign({}, packageJson);

    keys.forEach((key, index) => {
      if (index !== keys.length -1) {
        if (currentObject[key]) {
          currentObject = currentObject[key];
        } else {
          currentObject[key] = {};
          currentObject = currentObject[key];
        }
      } else {
        currentObject[key] = value;
      }
    });

    return newPackageJson;
  }
}

module.exports = WriteUtils;
