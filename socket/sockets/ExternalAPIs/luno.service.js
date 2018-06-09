const rp = require('request-promise');

class LunoService {

	constructor() {
	}

	fetchAllLunoCurrency() {
		const options = {
			method: 'GET',
			uri: 'https://api.mybitx.com/api/1/tickers',
			json: true 
		};
		return rp(options);
	}

}


module.exports = new LunoService();