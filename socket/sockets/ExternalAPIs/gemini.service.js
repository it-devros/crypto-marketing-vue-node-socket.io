const rp = require('request-promise');

class GeminiService {

	constructor() {
	}

	fetchGeminiCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://api.gemini.com/v1/pubticker/' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new GeminiService();