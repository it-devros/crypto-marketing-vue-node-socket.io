const rp = require('request-promise');

class PoloniexService {

	constructor() {
	}

	fetchAllMainCurrencies() {
		const options = {
			method: 'GET',
			uri: 'https://poloniex.com/public?command=returnTicker',
			json: true 
		};
		return rp(options);
	}

}


module.exports = new PoloniexService();