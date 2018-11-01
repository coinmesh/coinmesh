const findService = new (require('./services/find'));
const insertService = new (require('./services/insert'));
const removeService = new (require('./services/remove'));
const updateService = new (require('./services/update'));

module.exports = {
  findService,
  insertService,
  removeService,
  updateService
};
