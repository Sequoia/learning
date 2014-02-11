var fs = require('fs');
var filename = process.argv[2];
var fileBuffer = fs.readFileSync(filename);

//get # of lines in `contents` Buffer
var lines = fileBuffer.toString().split("\n");
lines.forEach(function(line,index){//remove \r's
	lines[index] = line.replace(/\r/,'');
});
lines = lines.filter(function(elem){ //cast out empty lines
	return elem.length > 0;
})
//lines.forEach(function(line, index){
	//console.log(">>>>>>>line " + (index+1) + "<<<<<<<<");
	//console.log(line);
	//console.log("^^^End line " + (index+1) + " ^^^");
//});
//console.log(filename);
console.log(lines.length);
