// var db = require('../db');
var Product = require('../models/product.model')

module.exports.index = async function(req, res) {
	// var page = parseInt(req.query.page) || 1;

	// var prodPerPage = 5;

	// var start = (page - 1)*prodPerPage;
	// var end = page*prodPerPage;
	// res.render('products/product', {
	// 	prods: db.get('products').value().slice(start, end)
	// })
	var products = await Product.find();
	res.render('products/product', {
		prods: products
	})
};