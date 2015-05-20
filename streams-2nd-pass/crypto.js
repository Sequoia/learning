var crypto = require('crypto');
var algo   = 'aes256';
var pw     = process.argv[2];

var decipher = crypto.createDecipher(algo, pw);

process.stdin
  .pipe(decipher)
  .pipe(process.stdout);
