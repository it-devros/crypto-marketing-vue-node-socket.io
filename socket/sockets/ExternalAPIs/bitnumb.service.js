const rp = require('request-promise');

class BitnumbService {

	constructor() {
	}

	fetchAllBitnumbCurrencies() {
		const options = {
			method: 'GET',
			uri: 'https://api.bithumb.com/public/ticker/all',
			json: true 
		};
		return rp(options);
	}

}


module.exports = new BitnumbService();