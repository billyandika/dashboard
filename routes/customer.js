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

exports.addCustomer = function(req, res) {
  var form_data = req.body;
  // console.log(form_data);

  // make a new Customer and save it to the DB
  // YOU MUST send an OK response w/ res.send();
  var CustomerItem = new models.Customer({
    "title": form_data.customer_title,
    "image": form_data.image_url,
    "date": form_data.date,
    "summary": form_data.summary
  });

  CustomerItem.save(afterSaving);

  function afterSaving(err) {
    if(err) { console.log(err); res.send(500); }
    res.send();
  }
}

// exports.updateCustomer = function(req, res) {

// }

exports.deleteCustomer = function(req, res) {
  var customerID = req.params.id;

  // find the customer and remove it
  // YOU MUST send an OK response w/ res.send();
  models.Customer.find({"_id": customerID})
  .remove()
  .exec(deleteCallback);

  function deleteCallback(err) {
    if(err) {console.log(err)};
    res.send();
  }
}