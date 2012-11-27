Opto3 - A Mobile CouchApp 
==========================
What
--------------
**Opto3** is a small CouchDB application entirely hosted within CouchDB. It uses JQuery Mobile to serve a 
single-page mobile application that presents a four-panel drill-down to find an optometrist in 
a desired US location. The sample data originated from a **MaxMind** **GeoLite** freely downloadable CSV at
[http://dev.maxmind.com/geoip/geolite](http://dev.maxmind.com/geoip/geolite).

Try the demo at [http://mauget.cloudant.com/opto3/_design/opto/index.html](http://mauget.cloudant.com/opto3/_design/opto/index.html)
or hit [http://bit.ly/UsMO0z](http://bit.ly/UsMO0z) in a mobile device.

The application build environment is [*Kanso*](http://kan.so/). Opto3 is coded entirely
in JavaScript. The Opto3 code consists of:

* two CouchDB map/reduce view functions,
* two CouchDB list functions,
* one CouchDB show function,
* three handlebars templates,
* a small controller that mediates UI events with DB views given to list and show CouchDB functions through the CouchDB REST API,
* and index.html - a JQuery Mobile single-page that defines four panels

Install from GitHub
-------------------
1. Install [CouchDb](http://couchdb.apache.org/) or use a CouchDB cloud at [Cloudant](https://cloudant.com/)
  * It's a good habit to create an admin user ID and password -- lower right in *Futon*.
1. Install [Kanso](http://kan.so/) - pre-requisite is [Nodejs](http://nodejs.org/)
1. Open [*Futon*](http://127.0.0.1:5984/_utils/) in a browser
  * Create the **opto3** database from the UI
1. Clone this project from GitHub [https://github.com/mauget/opto3-couchapp.git](https://github.com/mauget/opto3-couchapp.git)
1. Open a command window in the project directory
  * Execute: `kanso install` -- like make or ant
  * Execute: `kanso push http://<user>:<pw>@localhost:5984/opto3` (or to your Cloudant account)
1. Push the sample database: `kanso pushdata data/optometrist_sample.csv http://<user>:<pw>@localhost:5984/opto3`
1. Visually verify in [*Futon*](http://127.0.0.1:5984/_utils/)
1. Replicate to your own Cloudant account, if desired (Use Futon, curl or REST client) 
  
Alternative: Replicate Opto3 from Cloudant
------------------------------------
1. Install a local CouchDB or procure a Cloudant account. 
1. Clone [http://mauget.cloudant.com/opto3/](http://mauget.cloudant.com/opto3/) choosing a method noted 
at [http://guide.couchdb.org/draft/replication.html](http://guide.couchdb.org/draft/replication.html)

Execution
-----------
* In your local machine: [http://127.0.0.1:5984/opto3/_design/opto/index.html](http://127.0.0.1:5984/opto3/_design/opto/index.html)
* If using Cloudant: [http://YOU.cloudant.com/opto3/_design/opto/index.html](http://mauget.cloudant.com/opto3/_design/opto/index.html)
	
Opto3 Has Four Panels
------------
1. **Splash screen:** 

 ![Splash](https://github.com/mauget/opto3-couchapp/raw/master/splash.png)

1. **Clickable list of states with count of demo optometrists for each:**
 
 ![States](https://github.com/mauget/opto3-couchapp/raw/master/states.png)


1. **Clickable list of city addresses for each optometrist in the clicked state:** 

 ![Cities](https://github.com/mauget/opto3-couchapp/raw/master/cities.png)


1. **Details of an optometrist for a clicked address:** 

 ![Details](https://github.com/mauget/opto3-couchapp/raw/master/details.png)


[Lou Mauget lmauget@keyholesoftware.com](mailto:lmauget@keyholesoftware.com)
