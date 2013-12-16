var trumpet = require('trumpet');
var through = require('through');
var upLoudTr= trumpet();

var uppercaser = function(data){
	this.queue(data.toString().toUpperCase());
};

upLoudTr.selectAll('.loud',function(elem){
	var str = elem.createStream();
	str
		.pipe(through(uppercaser))
		.pipe(str);
});

process.stdin.pipe(upLoudTr).pipe(process.stdout);
