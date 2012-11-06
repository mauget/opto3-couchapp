	// app -- Optometrist demo in Couchdb
	// DOM ready:
	$(function() {
			// Kick it off with page one
			rp1();
	});

	// Populate relative page one rows
	function rp1 () {
		var url = "../opto/_list/list_states/count_by_state?group=true";
		// Populate li elements of #states ul through our supplied list CouchDb function
		$.get(url, function(data) {
			var selector = "#states";
			$(selector).empty();
			$(selector).append(data);
			$("div#statesdiv ul").listview("refresh");
		});
	}
	
	// Populate relative page two rows
	function rp2 (key) {
		var url = "../opto/_list/list_cities/sorted_states_cities?startkey=";
		url += '%5B%22' + key + '%22%5D'; // [key] encoded:
		url += '&endkey=';
		url += '%5B%22' + key + '%22%2C%7B%7D%5D'; // [key] encoded:
		
		//url='http://127.0.0.1:5984/opto3/_design/opto/_list/list_cities/sorted_states_cities?startkey=%5B%22WA%22%5D&endkey=%5B%22WA%22%2C%7B%7D%5D';
		
		$.get(url, function(data) {
			var selector = "#cities";
			$(selector).empty();
			$(selector).append(data);
			$("div#citiesdiv ol").listview("refresh");
		});
	}
	
	// Populate relatve page three detail page
	function rp3 (id) {
		// curl -X GET "http://127.0.0.1:5984/opto3/_design/opto/_show/detail/3770717789a226c91f8ce4808e2eefd7"
		var url = "../opto/_show/detail/";
		url += id;
		$.get(url, function(data) {
			var selector = "#details";
			$(selector).empty();
			$(selector).append(data);
		});	
	}
