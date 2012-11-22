
// app -- Optometrist demo in Couchdb
// Namespace is APP for app-level cpntroller logic
// Uses Routerlite for page refresh: https://github.com/1Marc/jquery-mobile-routerlite:w
APP = window.APP || {};

// Click handlers set these app globals. Routerlite uses them.
APP.key = '';
APP.id = '';

// DOM ready:
$(document).ready( function () {

	// Each time we change to a page with id="two" then run this code
	$.mobile.routerlite.pagechange("#two", function(page){
	  APP.rp1();
	});

	// If we change to a page with id="three" then run this code
	$.mobile.routerlite.pagechange("#three", function(page){
	  APP.rp2(APP.key);
	});


	// If we change to a page with id="four" then run this code
	$.mobile.routerlite.pagechange("#four", function(page){
	  APP.rp3(APP.id);
	});

	// Eagerly load states list
	APP.rp1();

});
// End DOM ready


// Populate relative page one rows
APP.rp1 = function () {
	console.log("Populate states listing");
	var url = "../opto/_list/list_states/count_by_state?group=true";
	// Populate li elements of #states ul through our supplied list CouchDb function
	$.get(url, function(data) {
		var selector = "#states";
		$(selector).empty();
		$(selector).append(data);
		try {
			$("div#statesdiv ul").listview("refresh");
		} catch (ex) {
			console.log(ex.message + ". It's OK.  States pre-leoaded. View them on next page.");
		}
	});
};
	
// Populate relative page two rows
APP.rp2 = function (key) {
	console.log("Populate cities listing");
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
};
	
// Populate relatve page three detail page
APP.rp3 = function (id) {
	console.log("Populate detail form");
	// curl -X GET "http://127.0.0.1:5984/opto3/_design/opto/_show/detail/3770717789a226c91f8ce4808e2eefd7"
	var url = "../opto/_show/detail/";
	url += id;
	$.get(url, function(data) {
		var selector = "#details";
		$(selector).empty();
		$(selector).append(data);
	});	
};
