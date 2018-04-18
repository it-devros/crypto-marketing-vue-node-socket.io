module.exports = function(app) {
    const admin = require('./admin');

    app.use('/admin', admin);
};