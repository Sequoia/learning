var through2 = require('through2');
var http     = require('http');

var upper = through2(function(chunk,enc,done){
  this.push(chunk.toString().toUpperCase());
  done();
});

http.createServer(function(req,res){
  req.pipe(upper).pipe(res);
})
.listen(process.argv[2]);
