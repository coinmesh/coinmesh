const config = {
  protocol: `${(process.env.RPC_PROTOCOL || 'http://')}`,
  username: `${process.env.RPC_USERNAME}`,
  password: `${process.env.RPC_PASSWORD}`,
  host: `${(process.env.RPC_HOST || 'localhost')}` ,
  port: `${(process.env.RPC_PORT || 18443)}`
};

module.exports = config;
