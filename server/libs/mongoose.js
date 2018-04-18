let mongoose = require('mongoose');
let config = require('../config');

mongoose.Promise = require('bluebird');
mongoose.connect(config.db, {useMongoClient : true});

module.exports = mongoose;
