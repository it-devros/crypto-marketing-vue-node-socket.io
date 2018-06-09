const rp = require('request-promise');

class OkcoinService {

	constructor() {
	}

	fetchOkcoinCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://www.okcoin.com/api/v1/ticker.do?symbol=' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new OkcoinService();