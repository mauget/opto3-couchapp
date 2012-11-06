Opto3 - A Mobile Couch App 
==========================
What
--------------
**Opto3** is a small CouchDB application entirely hosted within CouchDB. It uses JQuery Mobile to serve a 
single-page mobile application that presents a four-panel drill-down to find an optometrist in 
a desired US location. The sample data originated from a **MaxMind** **GeoLite** freely downloadable CSV at
[http://dev.maxmind.com/geoip/geolite](http://dev.maxmind.com/geoip/geolite).

The application build environment is Kanso from [http://kan.so/](http://kan.so/). Opto3 is coded entirely
in JavaScript. The code consists of:

* two CouchDB map/reduce view functions,
* two CouchDB list functions,
* one CouchDB show function,
* three Mustache templates
* a small controller the mediates views with list and show via the CouchDB REST API
* an index.html JQuery Mobile single-page that defines four panels.

Installation
------------
1. Install [CouchDb](http://couchdb.apache.org/) or use a CouchDB cloud at [Cloudant](https://cloudant.com/)
2. Install [Kanso](http://kan.so/) - pre-requisite is [Nodejs](http://nodejs.org/)
3. Open [*Futon*](http://127.0.0.1:5984/_utils/) in a browser; create the **opto3** database
4. Get this project from GitHub
5 Open a command window in the project directory
6 `kanso install` -- like make or ant
7 `kanso push http://<user>:<pw>@localhost:5984/opto3` or `kanso push http://localhost:5984/opto3`
	
Execution
-----------
* In your local machine: [http://127.0.0.1:5984/opto3/_design/opto/index.html](http://127.0.0.1:5984/opto3/_design/opto/index.html)
* If using Cloudant: [http://USER.cloudant.com/opto3/_design/opto/index.html](http://USER.cloudant.com/opto3/_design/opto/index.html)
	
Panels
------------
1. Splash screen
2. Clickable list of states with count of demo optometrists for each
3. Clickable list of city addresses for each optometrist in the clicked state
4. Details of an optometrist for a clicked address