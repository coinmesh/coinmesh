const {localLnd} = require('ln-service');
const lnd = localLnd({});

module.exports = lnd;
