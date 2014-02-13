var through = require('through');

process.stdin.pipe(through(function write(chunk){
		var typarray = new Uint8Array(chunk);
		this.queue(JSON.stringify(typarray));
		//process.stdout.write(JSON.stringify(typarray));
})).pipe(process.stdout);
