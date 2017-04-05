var csv = require( "fast-csv" );

// Require the 'request' module.
// Install it with `npm install --save request`.
var request = require('request');

var URL = "http://webrates.truefx.com/rates/connect.html?f=csv";

function fast_csv_read_url(url)
{
	var combination = [];
    // Let request return the document pointed to by the URL
    // as a readable stream, and pass it to csv.fromStream()
    csv.fromStream(request(url))
      .on("data", function(data){
        var finalData = [];
        for (i = 0; i< data.length; i++){
        	if (i == 0 || i == 4 || i == 5){
        		finalData.push(data[i]);
        	}
        }
        combination.push(finalData);
        console.log(finalData);
      })
      return combination;
}

fast_csv_read_url(URL);