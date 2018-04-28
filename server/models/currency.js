const mongoose = require('../libs/mongoose');
const Currency = require('./class/currency');

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
	exchangeName : {
		 type : String,
		 required : true,
	},
	buy : {
		 type : String,
		 default: '0',
	},
	sell : {
		 type : String,
		 default: '0',
	},
	change : {
		 type : String,
		 default: '0',
	},
	percent : {
		 type : String,
		 default: '0',
	},
});



schema.loadClass(Currency);
module.exports = mongoose.model('Currency', schema);
const CurrencyModel = mongoose.model('Currency');