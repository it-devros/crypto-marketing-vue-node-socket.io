
const EVENT = require('./Constants/events');
const SocketIO = require('socket.io');
const express = require('express');
const http = require('http');
const _ = require('lodash');
const rp = require('request-promise');
const internalAPIs = require('./internal.service');


class SocketServer {
	constructor() {
		this.io = null;
	}

	run(server) {
		this.io = new SocketIO(server);
		this.io.on('connect', (socket) => {
			this.handleConnection(socket);

			this.broadCastFiatPairs();
		});

		setInterval(()=>{
			this.broadCastFiatPairs();
		}, 1000 * 60 * 60 * 5);

		setInterval(()=>{
			this.broadCastMainPairs();
		}, 1000 * 2);

		setInterval(()=>{
			this.broadcastCurrencyPairs();
		}, 1000 * 2);

	}

	broadCastFiatPairs() {
		internalAPIs.fetchAllFiats().then((res) => {
			this.broadcastData(EVENT.USD_FIAT_PAIRS, {results: res.results, status: '200'});
		}).catch((err) => {
			console.log("getting fiats broadcast error");
			this.broadcastData(EVENT.USD_FIAT_PAIRS, {results: [], status: '400'});
			console.log(err);
		});
	}

	broadCastMainPairs() {
		internalAPIs.fetchAllMains().then((res) => {
			this.broadcastData(EVENT.MAIN_CURRENCY_PAIRS, {results: res.results, status: '200'});
		}).catch((err) => {
			console.log("fetching main currencies error");
			this.broadcastData(EVENT.MAIN_CURRENCY_PAIRS, {results: [], status: '400'});
			console.log(err);
		});
	}

	broadcastCurrencyPairs() {
		internalAPIs.fetchAllCurrencies().then((res) => {
			this.broadcastData(EVENT.CRYPTO_CURRENCY_PAIRS, {results: res.results, status: '200'});
		}).catch((err) => {
			console.log("fetching main currencies error");
			this.broadcastData(EVENT.CRYPTO_CURRENCY_PAIRS, {results: [], status: '400'});
			console.log(err);
		});
	}




	handleConnection(socket) {
		console.log("A user connected to Currency API Service");
	}

	broadcastData(event, data) {
		this.io.sockets.emit(event, data);
	}

}


module.exports = new SocketServer();



