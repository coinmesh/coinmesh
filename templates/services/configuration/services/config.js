const os = require('os');

let config = {
  userDirectory: `${os.homedir()}`
};

module.exports = config;
