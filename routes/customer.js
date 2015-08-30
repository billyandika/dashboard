var models = require('../models');

exports.customerInfo = function(req, res) {
  var customerID = req.params.id;

  models.Customer.find({"_id": customerID})
  .exec(afterQuery);

  // query for the specific customer and
  // call the following callback

  function afterQuery(err, customers) {
    if(err) console.log(err);
    res.json(customers[0]);
  }
}
