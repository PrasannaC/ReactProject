var express = require('express');
var app = express();
var csv = require( "fast-csv" );
var csv1 = require("csv");
var request = require('request');
global.combination = [];

app.get('/LEDon', function(req, res) {

    var url = 'http://webrates.truefx.com/rates/connect.html?f=csv';
    csv.fromStream(request(url))
      .on("data", function(data){
        var finalData = [];
        for (i = 0; i< data.length; i++){
        	if (i == 0 || i == 4 || i == 5){
        		finalData.push(data[i]);
        	}
        }
        global.combination.push(finalData);
        //console.log(global.combination);
	});
    res.send(global.combination);
});
app.listen(1337);