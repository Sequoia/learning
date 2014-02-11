var http = require('http');
var url = require('url');

http.createServer(function(req,res){
	var parsley = url.parse(req.url,true);
	var action = parsley.pathname.split('/').pop();
	var time = new Date(parsley.query.iso);
	var resObj = {};

	switch(action){
		case 'parsetime':
			resObj.hour = time.getHours();
			resObj.minute = time.getMinutes();
			resObj.second = time.getSeconds();
			break;
		case 'unixtime':
			resObj.unixtime = time.getTime();
			break;
		default:
			res.statusCode = 405;
			res.end('bad request')
	};
	res.writeHead(200, { 'Content-Type': 'application/json' } );
	res.end(JSON.stringify(resObj));
}).listen(8000);
