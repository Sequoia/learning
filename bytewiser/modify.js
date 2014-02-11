process.stdin.on('data', function(chunk){
  chunk.write('!',3);
  chunk.write('!',13);
  console.log(chunk);
});
