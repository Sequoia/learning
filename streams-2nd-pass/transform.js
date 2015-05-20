var through2 = require('through2');

var upper = through2(function(chunk,enc,done){
  this.push(chunk.toString().toUpperCase());
  done();
});

process.stdin
  .pipe(upper)
  .pipe(process.stdout);
