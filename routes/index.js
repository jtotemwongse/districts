var express = require('express');
var router = express.Router();

var restify = require('restify');
var http = require('http'), url = require('url');
var request = require('request');

/* GET home weather. */
// router.get('/', function(req, res) {
//   res.render('index', { title: 'Weather' });
// });

//Custome page
router.post('/weather', function(req, res) {
	var url = 'http://api.openweathermap.org/data/2.5/weather?q='+req.body.city+',us';
	var server = restify.createServer();
	request(url, // get weather
		function (error, response, body) {
		  // when data available
		  if (!error && response.statusCode == 200) {
			res.send(body); // send in response to /weather
		  } else {
		  	console.log(error);
		  }
		}
	);
});

module.exports = router;
