module.exports = function(app) {
	const auth = require('./auth');
	const fiat = require('./fiat');
	const main = require('./main');
	const currency = require('./currency');

	app.use('/auth', auth);
	app.use('/fiat', fiat);
	app.use('/main', main);
	app.use('/currency', currency);
};