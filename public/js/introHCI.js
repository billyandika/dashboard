'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
})

function initializePage() {
	$('.customer a').click(function(e) {
		e.preventDefault();

		var customerID = $(this).closest('.customer').attr('id');
		var idNumber = customerID.substr('customer'.length);

		var url_call = '/customer/'+idNumber;

		function addcustomerDetails(customer_json) {

			// var new_html =
			// 	'<div class="customer-date">'+'Card ID: '+customer_json['date']+'</div>'+
			// 	'<div class="customer-summary">'+customer_json['summary']+'</div>';

			// var details_div = $('#customer' + idNumber + ' .details');
			var details_div = $('#customer' + idNumber);
			details_div.html(new_html);
		}

		// issue the GET request
		$.get(url_call, addcustomerDetails);
	});
}


