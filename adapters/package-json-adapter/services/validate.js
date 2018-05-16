const fs = require('fs')
const readService = new (require('../services/read'));
const readUtils = new (require('../resources/read-utils'));

class ValidateService {
  checkAllProperties(projectPath) {
    return new Promise((resolve, reject) => {
      let errorProperties = [];

      readService.getConfiguration(projectPath).then(packageJson => {
        validProperties.forEach(property => {
          let result = this.checkProperty(packageJson, property);
          if (!result) {
            errorProperties.push(property);
          }
        });

        if (errorProperties.length > 0) {
          reject(`${errorProperties[0].name} is invalid.`);
        }
        resolve(true);
      });
    });
  }
  checkProperty(packageJson, property) {
    let propertyPath = `coinmesh.${property.name}`;
    const result = readUtils.getValueAtPath(packageJson, propertyPath);
    return property.values.indexOf(result) > -1;
  }
}

class Property {
  constructor(data) {
    this.name = data.name;
    this.values = data.values;
  }
}

const types = ['adapter', 'client', 'logic-tier', 'node'];

const validProperties = [
  new Property({ name: 'type', values: types })
];

module.exports = ValidateService;
