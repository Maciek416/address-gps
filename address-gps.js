var request = require('request');

module.exports = {

  // Call done() with an object containing latitude, longitude, and prettyAddress 
  // properties corresponding to the GPS coordinates and human readable form of address
  getGPS: function(address, done){
    address = address.trim();

    var url = "http://maps.googleapis.com/maps/api/geocode/json?address=" + encodeURIComponent(address) + "&sensor=false";

    request(url, function(error, response, body){
      var result = JSON.parse(body);

      if(result.results && result.results.length){
        var loc = result.results[0];

        done({
          latitude: loc.geometry.location.lat,
          longitude: loc.geometry.location.lng,
          prettyAddress: loc.formatted_address
        });
      }
    
    });
  }

};