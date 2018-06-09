const rp = require('request-promise');

class FiatService {

	constructor() {
	}

	fetchAllFiatCurrencies() {
		const options = {
			method: 'GET',
			uri: 'https://free.currencyconverterapi.com/api/v5/currencies',
			json: true 
		};
		return rp(options);
	}

	getFiatConvertRate(src, dst) {
		const options = {
			method: 'GET',
			uri: 'https://dev.kwayisi.org/apis/forex/' + src + '/' + dst,
			json: true 
		};
		return rp(options);
	}

}


module.exports = new FiatService();