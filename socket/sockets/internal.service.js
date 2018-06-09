const rp = require('request-promise');

const fiatAPIs = require('./ExternalAPIs/fiat.service');
const poloniexAPIs = require('./ExternalAPIs/poloniex.service');
const bitfinexAPIs = require('./ExternalAPIs/bitfinex.service');
const bitflyerAPIs = require('./ExternalAPIs/bitflyer.service');
const bitnumbAPIs = require('./ExternalAPIs/bitnumb.service');
const bitstampAPIs = require('./ExternalAPIs/bitstamp.service');
const bitchinaAPIs = require('./ExternalAPIs/bitchina.service');
const coinfloorAPIs = require('./ExternalAPIs/coinfloor.service');
const geminiAPIs = require('./ExternalAPIs/gemini.service');
const krakenAPIs = require('./ExternalAPIs/kraken.service');
const lunoAPIs = require('./ExternalAPIs/luno.service');
const okcoinAPIs = require('./ExternalAPIs/okcoin.service');
const quoineAPIs = require('./ExternalAPIs/quoine.service');

const config = require('../config');

class InternalService {

	constructor() {
	}


	// Fiat internal services

	resetFiat(obj) {
		const options = {
			method: 'POST',
			uri: config.serverUrl + '/fiat/save',
			body: obj,
			json: true 
		};
		return rp(options);
	}

	fetchAllFiats() {
		const options = {
			method: 'GET',
			uri: config.serverUrl + '/fiat/all',
			json: true 
		};
		return rp(options);
	}

	resetFiatTable() {
		config.fiatList.forEach((fiat) => {
			fiatAPIs.getFiatConvertRate('USD', fiat).then((res) => {
				if (res) {
					this.resetFiat(res).then((resp) => {
					}).catch((erro) => {
						console.log("Fiat saving error");
						console.log(erro);
					});
				}
			}).catch((err) => {
				console.log("Fiat getting error");
				
			});
		});
	}


	// Main internal services

	fetchAllMains() {
		const options = {
			method: 'GET',
			uri: config.serverUrl + '/main/all',
			json: true 
		};
		return rp(options);
	}

	resetMain(obj) {
		const options = {
			method: 'POST',
			uri: config.serverUrl + '/main/save',
			body: obj,
			json: true 
		};
		return rp(options);
	}

	resetMainTable() {
		poloniexAPIs.fetchAllMainCurrencies().then((res) => {
			config.mainDst.forEach((dst) => {
				let pair = config.mainSrc + '_' + dst;
				if (res[pair]) {
					let obj = {
						currencyName: config.mainSrc,
						pairName: dst,
						buy: res[pair].highestBid,
					}
					this.resetMain(obj).then((resp) => {
					}).catch((erro) => {
						console.log('saving main currencies error');
						console.log(erro);
					});
				}
			});
		}).catch((err) => {
			console.log("Poloniex API error");
			
		});
	}


	// Crypto Currency internal service

	fetchAllCurrencies() {
		const options = {
			method: 'GET',
			uri: config.serverUrl + '/currency/all',
			json: true 
		};
		return rp(options);
	}

	resetCurrency(obj) {
		const options = {
			method: 'POST',
			uri: config.serverUrl + '/currency/save',
			body: obj,
			json: true 
		};
		return rp(options);
	}


	resetBitfinexCurrency() {
		let param = '';
		config.bitfinexSrc.forEach((src) => {
			param += src + ',';
		});
		bitfinexAPIs.fetchAllBitfinexCurrencies(param).then((resp) => {
			resp.forEach((re) => {
				config.calcFiatList.forEach((pairName) => {
					if (re[0].indexOf(pairName) > -1) {
						let currencyName = re[0].replace('t', '').replace(pairName, '').trim();
						let obj = {
							currencyName: currencyName,
							pairName: pairName,
							exchangeName: 'Bitfinex',
							buy: re[1].toString(),
							sell: re[3].toString(),
							change: re[5].toString(),
							percent: re[6].toString(),
						}
						this.resetCurrency(obj).then((response) => {
						}).catch((err) => {
							console.log("update bitfinex internal api error");
							
						});
					}
				});
			});
		}).catch((err) => {
			console.log("Bitfinex API error");
			
		});
	}

	resetBitflyerCurrency() {
		config.bitflyerSrc.forEach((re) => {
			bitflyerAPIs.fetchBitflyerCurrency(re).then((resp) => {
				config.calcFiatList.forEach((fiat) => {
					if (resp.product_code.indexOf(fiat) > -1) {
						let pairName = fiat;
						let currencyName = resp.product_code.replace('_', '').replace(fiat, '').trim();
						let obj = {
							currencyName: currencyName,
							pairName: pairName,
							exchangeName: 'Bitflyer',
							buy: resp.best_bid.toString(),
							sell: resp.best_ask.toString(),
							change: '0',
							percent: '0',
						}
						this.resetCurrency(obj).then((response) => {
						}).catch((err) => {
							console.log("update bitflyer internal api error");
							
						});
					}
				});
			}).catch((err) => {
				console.log('bitflyer api error');
				
			});
		});
	}

	resetBitnumbCurrency() {
		bitnumbAPIs.fetchAllBitnumbCurrencies().then((res) => {
			for(let key in res.data) {
				if (res.data[key].buy_price) {
					let obj = {
						currencyName: key,
						pairName: 'KRW',
						exchangeName: 'Bitnumb',
						buy: res.data[key].buy_price.toString(),
						sell: res.data[key].sell_price.toString(),
						change: '0',
						percent: '0',
					}
					this.resetCurrency(obj).then((response) => {
					}).catch((err) => {
						console.log("update bitnumb internal api error");
						
					});
				}
			}
		}).catch((err) => {
			console.log('bitnumb api error');
			
		});
	}

	resetBitstampCurrency() {
		config.bitstampSrc.forEach((param) => {
			bitstampAPIs.fetchBitstampCurrency(param).then((res) => {
				let temp = param.toUpperCase();
				config.calcFiatList.forEach((pairName) => {
					if (temp.indexOf(pairName) > -1) {
						let currencyName = temp.replace(pairName, '').trim();
						let obj = {
							currencyName: currencyName,
							pairName: pairName,
							exchangeName: 'Bitstamp',
							buy: res.bid.toString(),
							sell: res.ask.toString(),
							change: '0',
							percent: '0',
						}
						this.resetCurrency(obj).then((response) => {
						}).catch((err) => {
							console.log("update bitstamp internal api error");
							
						});
					}
				});
			}).catch((err) => {
				console.log("bitstamp api error");
				
			});
		});
	}


	resetBitchinaCurrency() {
		config.bitchinaSrc.forEach((param) => {
			bitchinaAPIs.fetchBitchinaCurrency(param).then((res) => {
				if (res.ticker) {
					config.calcFiatList.forEach((pairName) => {
						if (param.indexOf(pairName) > -1) {
							let currencyName = param.replace(pairName, '').trim();
							let obj = {
								currencyName: currencyName,
								pairName: pairName,
								exchangeName: 'BTCchina',
								buy: res.ticker.BidPrice.toString(),
								sell: res.ticker.AskPrice.toString(),
								change: '0',
								percent: '0',
							}
							this.resetCurrency(obj).then((response) => {
							}).catch((err) => {
								console.log("update BTCchina internal api error");
								
							});
						}
					});
				}
			}).catch((err) => {
				console.log("btcchina api error");
				
			});
		});
	}

	resetCoinfloorCurrency() {
		config.coinfloorSrc.forEach((param) => {
			coinfloorAPIs.fetchCoinfloorCurrency(param).then((res) => {
				if(res && res != {}) {
					config.calcFiatList.forEach((pairName) => {
						if (param.indexOf(pairName) > -1) {
							let temp = param.replace('/', '').replace(pairName, '').trim();
							let currencyName = temp == 'XBT' ? 'BTC' : temp;
							let obj = {
								currencyName: currencyName,
								pairName: pairName,
								exchangeName: 'Coinfloor',
								buy: res.bid.toString(),
								sell: res.ask.toString(),
								change: '0',
								percent: '0',
							}
							this.resetCurrency(obj).then((response) => {
							}).catch((err) => {
								console.log("update Coinfloor internal api error");
								
							});
						}
					});
				}
			}).catch((err) => {
				console.log("coinfloor api error");
			});
		});
	}

	resetGeminiCurrency() {
		config.geminiSrc.forEach((param) => {
			geminiAPIs.fetchGeminiCurrency(param).then((res) => {
				if (res && res != {}) {
					config.calcFiatList.forEach((pairName) => {
						let temp_param = param.toUpperCase();
						if (temp_param.indexOf(pairName) > -1) {
							let currencyName = temp_param.replace(pairName, '').trim();
							let obj = {
								currencyName: currencyName,
								pairName: pairName,
								exchangeName: 'Gemini',
								buy: res.bid.toString(),
								sell: res.ask.toString(),
								change: '0',
								percent: '0',
							}
							this.resetCurrency(obj).then((response) => {
							}).catch((err) => {
								console.log("update gemini internal api error");
								
							});
						}
					});
				}
			}).catch((err) => {
				console.log('gemini api error');
				
			});
		});
	}


	resetkrakenCurrency() {
		let param = '';
		let length = config.krakenSrc.length;
		config.krakenSrc.forEach((src, index) => {
			if (index < length - 1) {
				param += src + ',';
			} else {
				param += src;
			}
		});
		krakenAPIs.fetchKrakenCurrency(param).then((res) => {
			if (res && res != {}) {
				for(let key in res.result) {
					config.calcFiatList.forEach((pairName) => {
						let temp = key.replace('X', '').replace('Z', '');
						if (temp.indexOf(pairName) > -1) {
							let temp_currency = temp.replace(pairName, '').trim();
							let currencyName = temp_currency == 'XBT' ? 'BTC' : temp_currency;
							let obj = {
								currencyName: currencyName,
								pairName: pairName,
								exchangeName: 'Kraken',
								buy: parseFloat(res.result[key].b[0]).toFixed(2).toString(),
								sell: parseFloat(res.result[key].a[0]).toFixed(2).toString(),
								change: '0',
								percent: '0',
							}
							this.resetCurrency(obj).then((response) => {
							}).catch((err) => {
								console.log("update kraken internal api error");
								
							});
						}
					});
				}
			}
		}).catch((err) => {
			console.log("kraken api error");
			
		});
	}

	resetLunoCurrency() {
		lunoAPIs.fetchAllLunoCurrency().then((res) => {
			if (res && res.tickers.length) {
				res.tickers.forEach((item) => {
					config.calcFiatList.forEach((pairName) => {
						if (item.pair.indexOf(pairName) > -1) {
							let temp = item.pair.replace(pairName, '').trim();
							let currencyName = temp == 'XBT' ? 'BTC' : temp;
							let obj = {
								currencyName: currencyName,
								pairName: pairName,
								exchangeName: 'Luno',
								buy: item.bid.toString(),
								sell: item.ask.toString(),
								change: '0',
								percent: '0',
							}
							this.resetCurrency(obj).then((response) => {
							}).catch((err) => {
								console.log("update luno internal api error");
								
							});
						}
					});
				});
			}
		}).catch((err) => {
			console.log('luno api error');
			
		});
	}

	resetOkcoinCurrency() {
		config.okcoinSrc.forEach((param) => {
			okcoinAPIs.fetchOkcoinCurrency(param).then((res) => {
				if (res && res.ticker) {
					config.calcFiatList.forEach((pairName) => {
						if (param.indexOf(pairName.toLowerCase()) > -1) {
							let currencyName = param.replace('_', '').toUpperCase().replace(pairName, '').trim();
							let obj = {
								currencyName: currencyName,
								pairName: pairName,
								exchangeName: 'Okcoin',
								buy: res.ticker.buy.toString(),
								sell: res.ticker.sell.toString(),
								change: '0',
								percent: '0',
							}
							this.resetCurrency(obj).then((response) => {
							}).catch((err) => {
								console.log("update okcoin internal api error");
								
							});
						}
					});
				}
			}).catch((err) => {
				console.log('okcoin api error');
				
			});
		});
	}

	resetQuoineCurrency() {
		config.quoineSrc.forEach((param) => {
			quoineAPIs.fetchQuoineCurrency(param).then((res) => {
				config.calcFiatList.forEach((pairName) => {
					if (res.currency_pair_code.indexOf(pairName) > -1) {
						let currencyName = res.currency_pair_code.replace(pairName, '').trim();
						let obj = {
							currencyName: currencyName,
							pairName: pairName,
							exchangeName: 'Quoine',
							buy: res.market_bid.toString(),
							sell: res.market_ask.toString(),
							change: '0',
							percent: '0',
						}
						this.resetCurrency(obj).then((response) => {
						}).catch((err) => {
							console.log("update okcoin internal api error");
							
						});
					}
				});
			}).catch((err) => {
				console.log("quoine api error");
			});
		});
	}

}


module.exports = new InternalService();