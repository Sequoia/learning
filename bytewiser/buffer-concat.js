var through = require('through');

var buffers = [];

process.stdin.pipe(through(function write(chunk){
	buffers.push(chunk);
}, function end(){
	//this.queue(Buffer.concat(buffers));
	console.log(Buffer.concat(buffers));
	this.queue(null);
})).pipe(process.stdout);
