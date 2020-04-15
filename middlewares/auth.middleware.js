var db = require('../db')

module.exports.requireAuth = function(req, res, next) {
	if (!req.signedCookies.userId) {
		res.redirect('/auth/login');
		return;
	}

	var user = db.get('users').find({ id: req.signedCookies.userId}).values();

	if (!user) {
		res.redirect('/auth/login');
		return;	
	}

	next();
}