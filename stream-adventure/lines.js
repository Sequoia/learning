var through  = require('through');
var split = require('split');
var even = false;

var upperAlternate = function upperEven(data){
	data = data.toString();
	data = even ? data.toUpperCase() : data.toLowerCase();
	even = !even;
	this.queue(data + "\n");
};

process.stdin
	.pipe(split())
	.pipe(through(upperAlternate))
	.pipe(process.stdout);
