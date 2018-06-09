const rp = require('request-promise');

class KrakenService {

	constructor() {
	}

	fetchAllSymbols() {
		const options = {
			method: 'GET',
			uri: 'https://api.kraken.com/0/public/AssetPairs',
			json: true 
		};
		return rp(options);
	}

	fetchKrakenCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://api.kraken.com/0/public/Ticker?pair=' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new KrakenService();