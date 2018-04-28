const mongoose = require('../libs/mongoose');
const Main = require('./class/main');

let Schema = mongoose.Schema;

let schema = new Schema({
	currencyName : {
		 type : String,
		 required : true
	},
	pairName : {
		 type : String,
		 required : true
	},
	buy : {
		 type : Number,
		 default: 0,
	},
});



schema.loadClass(Main);
module.exports = mongoose.model('Main', schema);
const FiatModel = mongoose.model('Main');