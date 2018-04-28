'use strict'
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = {
  NODE_ENV: '"production"',
  // API_ROOT: createEnvVariable('API_ROOT', 'http://localhost:8000'),
  API_ROOT: createEnvVariable('API_ROOT', 'http://217.160.166.25:8000'),
  SECURET_KEY: createEnvVariable('SECURET_KEY', '1'),
};
