const localLnd = require('./local-lnd');
const lnd = localLnd({});

module.exports = lnd;
