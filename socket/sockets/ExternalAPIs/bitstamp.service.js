const rp = require('request-promise');

class BitstampService {

	constructor() {
	}

	fetchBitstampCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://www.bitstamp.net/api/v2/ticker/' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new BitstampService();