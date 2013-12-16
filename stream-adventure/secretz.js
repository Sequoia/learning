var crypto = require('crypto');
var zlib = require('zlib');
var tar = require('tar');
var fs = require('fs');
var through = require('through');

var gunzip = zlib.createGunzip(); //unzipping stream
var deciph = crypto.createDecipher( process.argv[2], process.argv[3] ); //decipher stream
var tarparse = tar.Parse(); //tar parsing stream

tarparse.on('entry', function(e){
	if(e.type.toLowerCase() === 'file'){
		var hexer = crypto.createHash('md5', { encoding: 'hex' }); //hashing stream
		e.pipe(hexer)
			.pipe(through(function(data){
				this.queue(data.toString() + ' ' + e.path + '\n');
			}))
			.pipe(process.stdout);
		//e.on('data',function(d){
			//hexer.update(d);
		//});
		//e.on('end',function(){
			//console.log(hexer.digest('hex') + " " + e.path);
		//});
	}
});

//encrypted gzipped tarchive piped in on stdin
process.stdin
	.pipe(deciph)
	.pipe(gunzip)
	.pipe(tarparse);
