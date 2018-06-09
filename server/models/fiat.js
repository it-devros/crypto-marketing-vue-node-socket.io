const mongoose = require('../libs/mongoose');
const Fiat = require('./class/fiat');

let Schema = mongoose.Schema;

let schema = new Schema({
	date : {
		 type : String,
		 required : true
	},
	pair : {
		 type : String,
		 required : true
	},
	rate : {
		 type : Number,
		 default: 0,
	},
});



schema.loadClass(Fiat);
module.exports = mongoose.model('Fiat', schema);
const FiatModel = mongoose.model('Fiat');