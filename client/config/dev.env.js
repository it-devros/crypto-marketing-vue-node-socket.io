'use strict'
const merge = require('webpack-merge');
const prodEnv = require('./prod.env');
const createEnvVariable = require('../build/utils').createEnvVariable;

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_ROOT: createEnvVariable('API_ROOT', 'http://api2.staging.volunteer-vision.com'),
});
