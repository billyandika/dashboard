
var models = require('../models');

exports.view = function(req, res){

	models.Customer
		.find()
		.sort('name')
		.exec(renderCustomers);

	function renderCustomers(err, customers) {
		res.render('index', { 'customers': customers });
	}

};