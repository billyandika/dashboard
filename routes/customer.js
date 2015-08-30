var models = require('../models');

exports.customerInfo = function(req, res) {
  var customerID = req.params.id;

  models.Customer.find({"_id": customerID})
  .exec(afterQuery);

  function afterQuery(err, customers) {
    if(err) console.log(err);
    res.json(customers[0]);
  }
}
