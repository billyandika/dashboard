
var Mongoose = require('mongoose');

var CustomerSchema = new Mongoose.Schema({
  	"name": String,
  	"cid": String,
  	"phone": String,
  	"address": String,
  	"dob": String,
  	"action": String, 
  	"ccard": { 
		  "cctype": String,
    	"ccname": String,
  		"digits": String,
  		"zipcode": String,
  		"expiry": String
  	}
});

exports.Customer = Mongoose.model('Customer', CustomerSchema);