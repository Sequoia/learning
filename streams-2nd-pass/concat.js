var through2 = require('through2');
var concat= require('concat-stream');

function reverse(str){ return str.toString().split('').reverse().join(''); }

var reverser = concat(function(body){
  console.log(reverse(body));
});

process.stdin
  .pipe(reverser);

