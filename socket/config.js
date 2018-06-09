
module.exports = {

	serverUrl: 'http://localhost:8000',
  // serverUrl: 'http://217.160.166.25:8000',

	fiatList: ['EUR', 'GBP', 'CAD', 'ZAR', 'KRW', 'JPY', 'HKD', 'SGD'],
	calcFiatList: ['USD', 'EUR', 'GBP', 'CAD', 'ZAR', 'KRW', 'JPY', 'HKD', 'SGD'],

	mainSrc : 'BTC',
  mainDst : ["HUC", "XVC", "NAUT", "GRC", "SBD", "PASC", "VRC", "SJCX", "NEOS", "NMC", "BCY", "XBC", "BTM", "NOTE", "BELA", "RIC", "PPC", "OMNI", "XCP", "RADS", "AMP", "GNO", "FLDC", "BLK", "EXP", "CLAM", "XPM", "VTC", "VIA", "POT", "BTCD", "LBC", "NXC", "BCN", "EMC2", "ARDR", "PINK", "REP", "DCR", "STEEM", "NAV", "GAME", "NXT", "FLO", "BURST", "MAID", "SC", "ZRX", "GNT", "STR", "SYS", "FCT", "DOGE", "ZEC", "DASH", "STRAT", "DGB", "CVC", "XEM", "LSK", "BTS", "BCH", "XMR", "ETC", "XRP", "LTC", "ETH", "USDT"],


  bitfinexSrc: ["tBTCUSD", "tLTCUSD", "tLTCBTC", "tETHUSD", "tETHBTC", "tETCBTC", "tETCUSD", "tRRTUSD", "tRRTBTC", "tZECUSD", "tZECBTC", "tXMRUSD", "tXMRBTC", "tDSHUSD", "tDSHBTC", "tBCCBTC", "tBCUBTC", "tBCCUSD", "tBCUUSD", "tXRPUSD", "tXRPBTC", "tIOTUSD", "tIOTBTC", "tIOTETH", "tEOSUSD", "tEOSBTC", "tEOSETH", "tSANUSD", "tSANBTC", "tSANETH", "tOMGUSD", "tOMGBTC", "tOMGETH", "tBCHUSD", "tBCHBTC", "tBCHETH"],
  bitflyerSrc: ['BTC_JPY'],
  bitstampSrc : ["btcusd", "btceur", "xrpusd", "xrpeur", "ltcusd", "ltceur", "ethusd", "etheur", "bchusd", "bcheur"],
  bitchinaSrc: ['BTCUSD'],
  coinfloorSrc: ['XBT/GBP', 'XBT/EUR', 'XBT/USD', 'BCH/GBP'],
  geminiSrc: ['btcusd', 'ethbtc', 'ethusd'],
  krakenSrc: ["XBTCAD", "XBTEUR", "XBTGBP", "XBTJPY", "XBTUSD", "BCHEUR", "BCHUSD", "BCHXBT", "DASHEUR", "DASHUSD", "DASHXBT", "ETCEUR", "ETCUSD", "ETCXBT", "ETCETH", "EOSETH", "EOSXBT", "ETHCAD", "ETHEUR", "ETHGBP", "ETHJPY", "ETHUSD", "ETHXBT","GNOETH", "GNOXBT", "ICNETH", "ICNXBT", "LTCEUR", "LTCUSD", "LTCXBT", "MLNETH", "MLNXBT", "REPETH", "REPEUR", "REPXBT", "USDTUSD", "XDGXBT", "XLMXBT", "XMREUR", "XMRUSD", "XMRXBT", "XRPEUR", "XRPUSD", "XRPXBT", "ZECEUR", "ZECUSD", "ZECXBT"],
  okcoinSrc: ['btc_usd', 'ltc_usd', 'eth_usd', 'etc_usd', 'bch_usd'],
  quoineSrc: [5,],

}
