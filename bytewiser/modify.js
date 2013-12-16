process.stdin.on('data', function(chunk){
  chunk.write('21',3,1,'hex');
  chunk.write('21',13,1,'hex');
  console.log(chunk);
});
