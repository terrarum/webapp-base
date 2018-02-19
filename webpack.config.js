const clientConfig = require('./webpack.config.client');
const serverConfig = require('./webpack.config.server');

const common = {};

module.exports = [
  Object.assign({}, common, clientConfig),
  Object.assign({}, common, serverConfig)
];
