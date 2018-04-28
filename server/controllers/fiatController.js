const config = require('../config');
const mongoose = require('mongoose');
const Fiat = mongoose.model('Fiat');


class FiatController {

	constructor() {

	}

	static getAll(req) {
		return Fiat.list().then((res) => {
			return {results: res || []};
		}).catch((err) => {
			throw err;
		});
	}

	static saveOne(req) {
		return Fiat.load({pair: req.body.pair}).then((res) => {
			if (!res) {
				return new Fiat(req.body).save();
			} else {
				res.date = req.body.date;
				res.rate = req.body.rate;
				return res.save();
			}
		}).catch((err) => {
			console.log("Fiat saving error");
			throw err;
		});
	}

}

module.exports = FiatController;