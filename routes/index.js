
var models = require('../models');

/*
 * GET home page.
 */

exports.view = function(req, res){

	models.Customer
		.find()
		.sort('date')
		.exec(renderCustomers);

	function renderCustomers(err, customers) {
		res.render('index', { 'customers': customers });
	}

};