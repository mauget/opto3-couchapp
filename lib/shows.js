//
// Export all Couchdb show functions here.
//
exports.detail = function(doc, req) {
	
	var Handlebars = require('handlebars'); 
	var context = {
		_id: doc._id,
		full_name: doc.full_name,
		title: doc.title,
		street_address1: doc.street_address1,
		street_address2: doc.street_address2,
		street_city: doc.street_city,
		street_state: doc.street_state,
		street_zip: doc.street_zip,
		street_county: doc.street_county,
		street_phone: doc.street_phone,
		gender: doc.gender,
		specialty: doc.specialty
	};
	
    var template = Handlebars.templates['detail.html'];
	var html = template(context);
    return html;
};

