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

		function addCustomerDetails(customer_json) {

			// var new_html =
			// 	'<div class="customer-date">'+'Card ID: '+customer_json['date']+'</div>'+
			// 	'<div class="customer-summary">'+customer_json['summary']+'</div>';

			// var details_div = $('#customer' + idNumber + ' .details');
			var details_div = $('#customer' + idNumber);
			details_div.html(new_html);
		}

		// issue the GET request
		$.get(url_call, addCustomerDetails);
	});

	// $('#approveButton').click(function(e) {
	// 	console.log('clicked');
	// 	var title = $('#new-project-form #title').val();
	// 	var image_url = $('#new-project-form #image_url').val();
	// 	var date = $('#new-project-form #date').val();
	// 	var summary = $('#new-project-form #summary').val();
	// 	var json = {
	// 		'project_title': title,
	// 		'image_url': image_url,
	// 		'date':  date,
	// 		'summary': summary
	// 	};
	// 	$.post('/customer/new', json, function() {
	// 		window.location.href = '/'; // reload the page
	// 	});
	// });
}


