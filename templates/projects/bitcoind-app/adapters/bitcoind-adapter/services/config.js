const config = {
  protocol: `${(process.env.RPC_PROTOCOL || 'http://')}`,
  username: `${process.env.RPC_USERNAME}`,
  password: `${process.env.RPC_PASSWORD}`,
  host: `${(process.env.RPC_HOST || 'localhost')}` ,
  port: `${(null || 18332)}`
};

module.exports = config;
