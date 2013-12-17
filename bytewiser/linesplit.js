var fs = require('fs');

fs.readFile(process.argv[2],function(err, data){
  var newStart = 0;

  for(var i = 0; i < data.length; i++){
    if(data.toString("utf8",i,i+1) === '\n'){
      console.log(data.slice(newStart,i));
      newStart = i+1;
    }
  }
  console.log(data.slice(newStart,data.length));
});
