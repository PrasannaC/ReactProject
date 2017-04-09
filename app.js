var express = require('express');
var app = express();
var csv = require( "fast-csv" );
var csv1 = require("csv");
var request = require('request');
global.combination = [];

app.get('/LEDon', function(req, res) {
    //re-init global.combination to avoid duplicate
    global.combination = [];

    var url = 'http://webrates.truefx.com/rates/connect.html?f=csv';
    csv.fromStream(request(url))
      .on("data", function(data){
        
        var finalData = [];
        for (i = 0; i< data.length; i++){
        	if (i == 0 || i == 4 || i == 5){
                if(data[i].length > 0)
        		  finalData.push(data[i]);
        	}
        }
        global.combination.push(finalData);
        
	}).on("end", function(){       // adding on end callback, to send the response only once all the records are finished reading and parsing.
         console.log("done");
         res.send(global.combination);
    });;
    
});
app.listen(1337);
