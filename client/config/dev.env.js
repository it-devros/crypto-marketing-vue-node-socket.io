'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: createEnvVariable('API_ROOT', 'http://localhost:8000'),
  SECURET_KEY: createEnvVariable('SECURET_KEY', '1'),
  // ONLINE_SOCKET_SERVICE: createEnvVariable('ONLINE_SOCKET_SERVICE', 'http://localhost:8001'),
  ONLINE_SOCKET_SERVICE: createEnvVariable('ONLINE_SOCKET_SERVICE', 'http://82.165.135.219:8001'),

});
