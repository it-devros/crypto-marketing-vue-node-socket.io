module.exports = function(app) {
	const auth = require('./auth');

	app.use('/auth', auth);
};