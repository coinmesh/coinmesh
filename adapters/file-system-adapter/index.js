const confFileService = new (require('./services/conf-file'));
const fileSystemService = new (require('./services/file-system'));
const validate = new (require('./services/validate'));

module.exports = {
  confFileService,
  fileSystemService,
  validate
};
