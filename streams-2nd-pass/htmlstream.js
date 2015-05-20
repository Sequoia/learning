var through2 = require('through2');
var tr = require('trumpet')();

var loud = tr.select('.loud').createStream();

var uppercaser = through2(function(chunk,_,next){
  this.push(chunk.toString().toUpperCase());
  next();
});

loud.pipe(uppercaser).pipe(loud);

process.stdin
  .pipe(tr)
  .pipe(process.stdout);
