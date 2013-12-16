var crypto = require('crypto');
var deciphStream = crypto.createDecipher('aes256', process.argv[2]);

process.stdin.pipe(deciphStream).pipe(process.stdout);
