//
// Export all Couchdb view functions here.
//

// Used for panel two
exports.count_by_state = {
	map: function(doc) { emit([doc.street_state], 1);  },
	reduce: function (key, values, rereduce) { return sum(values);  }   
};

// Used for panel three
exports.sorted_states_cities = {
	map: function(doc) { emit([doc.street_state, doc.street_city], doc.street_address1);  }
};

