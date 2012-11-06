Opto3 - A Mobile Couch App 
==========================
What
--------------
**Opto3** is a small CouchDB application entirely hosted within CouchDB. It uses JQuery Mobile to serve a 
single-page mobile application that presents a four-panel drill-down to find an optometrist in 
a desired US location. The sample data originated from a **MaxMind** **GeoLite** freely downloadable CSV at
[http://dev.maxmind.com/geoip/geolite](http://dev.maxmind.com/geoip/geolite).

The application build environment is [*Kanso*](http://kan.so/). Opto3 is coded entirely
in JavaScript. The Opto3 code consists of:

* two CouchDB map/reduce view functions,
* two CouchDB list functions,
* one CouchDB show function,
* three Mustache templates,
* a small controller that mediates UI events with DB views given to list and show CouchDB functions through the CouchDB REST API,
* and index.html - a JQuery Mobile single-page that defines four panels

Installation
------------
1. Install [CouchDb](http://couchdb.apache.org/) or use a CouchDB cloud at [Cloudant](https://cloudant.com/)
2. Install [Kanso](http://kan.so/) - pre-requisite is [Nodejs](http://nodejs.org/)
3. Open [*Futon*](http://127.0.0.1:5984/_utils/) in a browser; create the **opto3** database
4. Clone this project from GitHub [https://github.com/mauget/opto3-couchapp.git](https://github.com/mauget/opto3-couchapp.git)
5. Open a command window in the project directory
6. Execute: `kanso install` -- like make or ant
7. Execute: `kanso push http://<user>:<pw>@localhost:5984/opto3` (or to your Cloudant account)
8. Push the sample database: `kanso pushdata data/optometrist_sample.csv http://<user>:<pw>@localhost:5984/opto3`
9. Visually verify in [*Futon*](http://127.0.0.1:5984/_utils/)
10. Replicate to your own Cloudant account, if desired (Use Futon, curl or REST client) 
  
Execution
-----------
* In your local machine: [http://127.0.0.1:5984/opto3/_design/opto/index.html](http://127.0.0.1:5984/opto3/_design/opto/index.html)
* If using Cloudant: [http://USER.cloudant.com/opto3/_design/opto/index.html](http://USER.cloudant.com/opto3/_design/opto/index.html)

Mine is at [http://mauget.cloudant.com/opto3/_design/opto/index.html](http://mauget.cloudant.com/opto3/_design/opto/index.html)
	
Panels
------------
1. Splash screen
2. Clickable list of states with count of demo optometrists for each
3. Clickable list of city addresses for each optometrist in the clicked state
4. Details of an optometrist for a clicked address
