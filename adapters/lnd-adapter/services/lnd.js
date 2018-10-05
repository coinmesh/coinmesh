const {localLnd} = require('ln-service/service');
const lnd = localLnd({});

module.exports = lnd;
