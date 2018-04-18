const config = {
  protocol: `${process.env.PROTOCOL}` || 'http://',
  username: `${process.env.RPC_USERNAME}`,
  password: `${process.env.RPC_PASSWORD}`,
  host: `${process.env.HOST}` || 'localhost',
  port: `${process.env.PORT}` || 19332
};

module.exports = config;
