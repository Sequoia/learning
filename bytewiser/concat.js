var body = '';
process.stdin.on('data',function(chunk){
  body += chunk;
});
process.stdin.on('end',function(){
  console.log(new Buffer(body));
});
