
var Mongoose = require('mongoose');

var CustomerSchema = new Mongoose.Schema({
   //  "title": String,
  	// "date": String,
  	// "summary": String,
  	"name": String,
  	"cid": String,
  	"phone": String,
  	"address": String,
  	"dob": String,
  	"checked": Number, 
  	"ccard": { 
  		"cctype": String,
  		"ccname": String,
		"digits": String,
		"zipcode": String,
		"expiry": String
	}
});

// var CardSchema = new Mongoose.Schema({
// 		"type": String,
// 		"digits": String,
// 		"status": String,
// 		"expiry": String
// })

exports.Customer = Mongoose.model('Customer', CustomerSchema);

// exports.Card = Mongoose.model('Card', CardSchema);



