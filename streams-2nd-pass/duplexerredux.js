var duplex = require('duplexer2');
var Writable = require('stream').Writable;

var totals = {};

var ws = Writable({objectMode:true});
ws._write = function (chunk, enc, next) {
  if(totals[chunk.country]){
    totals[chunk.country]++;
  }else{
    totals[chunk.country] = 1;
  }
  next();
};

module.exports = function(counter){
  var plexer = duplex(ws, counter);
  plexer.on('finish', function(){
    counter.setCounts(totals);
  });
  return plexer;
};
