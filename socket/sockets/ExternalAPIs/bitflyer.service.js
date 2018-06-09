const rp = require('request-promise');

class BitflyerService {

	constructor() {
	}

	fetchAllSymbols() {
		const options = {
			method: 'GET',
			uri: 'https://api.bitflyer.jp/v1/markets',
			json: true 
		};
		return rp(options);
	}

	fetchBitflyerCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://api.bitflyer.jp/v1/ticker?product_code=' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new BitflyerService();