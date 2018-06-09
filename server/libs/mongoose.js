let mongoose = require('mongoose');
let config = require('../config');

mongoose.Promise = require('bluebird');
mongoose.connect(config.db, {useMongoClient : true}).then((res) => {
	console.log("Connected successfully");
}).catch((err) => {
	console.log("Connection failed");
	throw err;
});;

module.exports = mongoose;
