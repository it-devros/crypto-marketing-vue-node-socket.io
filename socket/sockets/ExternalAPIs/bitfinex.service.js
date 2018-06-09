const rp = require('request-promise');

class BitfinexService {

	constructor() {
	}

	fetchAllSymbols() {
		const options = {
			method: 'GET',
			uri: 'https://api.bitfinex.com/v1/symbols',
			json: true 
		};
		return rp(options);
	}

	fetchAllBitfinexCurrencies(param) {
		const options = {
			method: 'GET',
			uri: 'https://api.bitfinex.com/v2/tickers?symbols=' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new BitfinexService();