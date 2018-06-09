const rp = require('request-promise');

class CoinfloorService {

	constructor() {
	}

	fetchCoinfloorCurrency(param) {
		const options = {
			method: 'GET',
			uri: 'https://webapi.coinfloor.co.uk:8090/bist/' + param + '/ticker/',
			json: true 
		};
		return rp(options);
	}

}


module.exports = new CoinfloorService();