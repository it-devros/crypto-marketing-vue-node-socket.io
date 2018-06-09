const rp = require('request-promise');

class QuoineService {

	constructor() {
	}

	fetchQuoineCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://api.quoine.com/products/' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new QuoineService();