var http = require('http');
var through = require('through');

var uppercaser = function(data){
	this.queue(data.toString().toUpperCase());
};
var ender = function(){
	this.queue(null);
};
var server = http.createServer( function( req, res ){
	req.pipe(through(uppercaser,ender)).pipe(res);
});
server.listen(8001);
