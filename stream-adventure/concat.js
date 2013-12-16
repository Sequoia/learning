var concat = require('concat-stream');
var http = require('http');

process.stdin.pipe(concat(function(data){
	console.log(data.toString().split('').reverse().join(''));
	//process.stdout.write(data.toString().split('').reverse().join(''));
}));
