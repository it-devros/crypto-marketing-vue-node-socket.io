const rp = require('request-promise');

class BitchinaService {

	constructor() {
	}

	fetchBitchinaCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://spotusd-data.btcc.com/data/pro/ticker?symbol=' + param,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new BitchinaService();