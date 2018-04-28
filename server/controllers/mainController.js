const config = require('../config');
const mongoose = require('mongoose');
const Main = mongoose.model('Main');


class MainController {

	constructor() {

	}

	static getAll(req) {
		return Main.list().then((res) => {
			return {results: res || []};
		}).catch((err) => {
			throw err;
		});
	}

	static saveOne(req) {
		return Main.load({currencyName: req.body.currencyName, pairName: req.body.pairName}).then((res) => {
			if (!res) {
				return new Main(req.body).save();
			} else {
				res.buy = req.body.buy;
				return res.save();
			}
		}).catch((err) => {
			console.log("Main saving error");
			throw err;
		});
	}

}

module.exports = MainController;