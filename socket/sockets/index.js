
const Socketservice = require('./socket.service');
const express = require('express');
const http = require('http');
const path = require('path');
const internalAPIs = require('./internal.service');

let app = express();
let server = http.Server(app);
let port = 8001;

Socketservice.run(server);
app.get('/api/sockets', (req, res) => {
  res.send('All Currencies APIs working');
});

// 23h
internalAPIs.resetFiatTable();
setInterval(() => {
 	internalAPIs.resetFiatTable();
}, 1000 * 60 * 60 * 23);

// 3s
internalAPIs.resetMainTable();
setInterval(() => {
 	internalAPIs.resetMainTable();
}, 1000 * 5);

// 3s
internalAPIs.resetBitfinexCurrency();
setInterval(() => {
 	internalAPIs.resetBitfinexCurrency();
}, 1000 * 10);

// 5s
internalAPIs.resetBitflyerCurrency();
setInterval(() => {
 	internalAPIs.resetBitflyerCurrency();
}, 1000 * 5);

// 2s
internalAPIs.resetBitnumbCurrency();
setInterval(() => {
 	internalAPIs.resetBitnumbCurrency();
 }, 1000 * 2);

// 65s
internalAPIs.resetBitstampCurrency();
setInterval(() => {
 	internalAPIs.resetBitstampCurrency();
}, 1000 * 65);

// 2s
internalAPIs.resetBitchinaCurrency();
setInterval(() => {
 	internalAPIs.resetBitchinaCurrency();
}, 1000 * 2);

// 2s
internalAPIs.resetCoinfloorCurrency();
setInterval(() => {
 	internalAPIs.resetCoinfloorCurrency();
}, 1000 * 2);

// 3s
internalAPIs.resetGeminiCurrency();
setInterval(() => {
 	internalAPIs.resetGeminiCurrency();
}, 1000 * 3);

// 3s
internalAPIs.resetkrakenCurrency();
setInterval(() => {
 	internalAPIs.resetkrakenCurrency();
}, 1000 * 3);

// 11s
internalAPIs.resetLunoCurrency();
setInterval(() => {
 	internalAPIs.resetLunoCurrency();
}, 1000 * 11);

// 3s
internalAPIs.resetOkcoinCurrency();
setInterval(() => {
 	internalAPIs.resetOkcoinCurrency();
}, 1000 * 3);

// 3s
internalAPIs.resetQuoineCurrency();
setInterval(() => {
 	internalAPIs.resetQuoineCurrency();
}, 1000 * 3);


server.listen(port, () => {
  console.log('Socket API Listening on :' + port);
});



