var Product = require('../../models/product.model')

module.exports.index = async function(req, res) {
	var products = await Product.find();
	res.json(products);
};

module.exports.find = async function(req, res) {
	var id = req.params.id;
	var product = await Product.find({ _id: id });
	res.json(product)
};

module.exports.create = async function(req, res) {
	var product = await Product.create(req.body);
	res.json(product)
};

module.exports.update = async function(req, res) {
	var id = req.params.id;
	var query = { _id: id};
	var product = await Product.update(query, req.body);
	res.json(product)
};   

module.exports.updateAll = async function(req, res) {
	var id = req.params.id;
	var query = { _id: id};
	var product = await Product.update(query, {$set: req.body})
	res.json(product)
};

module.exports.delete = async function(req, res) {
	var id = req.params.id;
	var query = { _id: id};
	var product = await Product.deleteOne(query);
	res.json(product);
}  