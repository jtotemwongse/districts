var restify = require('restify');
var http = require('http'), url = require('url');
var request = require('request');

var url = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=cat&tagmode=any&format=json&jsoncallback=?';

var server = restify.createServer();
server.get('/pix', respond);

function respond(req, res, next) {
	request(url, // get flikr
		function (error, response, body) {
		  // when data available
		  if (!error && response.statusCode == 200) {
		  	body = body.substring(1, body.length() - 2);
		  	var json = JSON.parse(body);
			res.send(json); // send in response to /pix
			console.log('data sent');
		  }
		}
	);

	next();
}

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
