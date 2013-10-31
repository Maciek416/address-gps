address-gps
===========

Retrieve GPS coordinates and readable address for a given address via the Google maps API

```javascript

var addressGPS = require('address-gps');
var address = "90210";

addressGPS.getGPS(address, function(location){
  console.log(location.prettyAddress + " is at : ", location.latitude, ", " + location.longitude);
});

```
