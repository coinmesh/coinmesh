const readService = new (require('./services/read'));
const writeService = new (require('./services/write'));
const validateService = new (require('./services/validate'));

module.exports = {
  readService,
  writeService,
  validateService
};
