let mongoose = require('mongoose');
let config = require('../config');

mongoose.Promise = require('bluebird');
mongoose.connect(config.db, {useMongoClient : true}).then((res) => {
	console.log("connected successfully");
}).catch((err) => {
	console.log("connection failed");
	throw err;
});;

module.exports = mongoose;
