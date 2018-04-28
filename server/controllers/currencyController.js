const config = require('../config');
const mongoose = require('mongoose');
const Currency = mongoose.model('Currency');


class CurrencyController {

	constructor() {

	}

	static getAll(req) {
		return Currency.list().then((res) => {
			return {results: res || []};
		}).catch((err) => {
			throw err;
		});
	}

	static saveOne(req) {
		return Currency.load({currencyName: req.body.currencyName, pairName: req.body.pairName, exchangeName: req.body.exchangeName}).then((res) => {
			if (!res) {
				return new Currency(req.body).save();
			} else {
				res.buy = req.body.buy;
				res.sell = req.body.sell;
				res.change = req.body.change;
				res.percent = req.body.percent;
				return res.save();
			}
		}).catch((err) => {
			console.log("Main saving error");
			throw err;
		});
	}

}

module.exports = CurrencyController;