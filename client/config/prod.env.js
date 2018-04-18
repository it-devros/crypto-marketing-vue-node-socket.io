'use strict'
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = {
  NODE_ENV: '"production"',
  API_ROOT: createEnvVariable('API_ROOT', 'http://api2.volunteer-vision.com'),
};
