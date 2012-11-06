//
// All Couchdb list functions exported to module here.
//

// Populates list in panel two
exports.list_states =  function(doc, req) {
	
	provides('html', function() { 
	        var Handlebars = require('handlebars');  
	        var template = Handlebars.templates['stateName.html'];
	        var html = ''; 
	        while (row = getRow()) {
	            var context = { key: row.key, value: row.value};
	            html += template(context);
	        }    
	        return html;
	    }
	)
};

// Populates list in panel three
exports.list_cities =  function(doc, req) {
	
	provides('html', function() { 
	        var Handlebars = require('handlebars');  
	        var template = Handlebars.templates['cityName.html'];
	        var html = ''; 
	        while (row = getRow()) {
	            var context = { id: row.id, state: row.key[0], city: row.key[1], address: row.value};
	            html += template(context);
	        }    
	        return html;
	    }
	)
};
