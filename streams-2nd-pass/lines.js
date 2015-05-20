var through2 = require('through2');
var split = require('split');

function appendNewline(buf){ return buf.toString() + '\n'; }
function getOpFor(even){
  return String.prototype[even ? 'toUpperCase' : 'toLowerCase'];
}

var even = false;
var upperEvens = through2(function(chunk,enc,done){
  this.push(appendNewline(getOpFor(even).apply(chunk)));
  even^=1;
  done();
});

process.stdin
  .pipe(split())
  .pipe(upperEvens)
  .pipe(process.stdout);
