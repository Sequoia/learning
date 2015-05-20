var crypto = require('crypto');
var zlib   = require('zlib');
var tar    = require('tar');
var through2 = require('through2');

var algo   = process.argv[2];
var pw     = process.argv[3];

var decipher    = crypto.createDecipher(algo, pw);
var uncompresser= zlib.createGunzip();
var untarrer    = tar.Parse();
var makeHasher  = function(){ return crypto.createHash('md5', { encoding: 'hex'}); };

untarrer.on('entry',function(entry){
  if(entry.type === 'File'){
    entry.pipe(makeHasher())
      .pipe(through2(function(chunk, enc, next){
        this.push(chunk + ' ' + entry.path + '\n');
        next();
      }))
      .pipe(process.stdout);
  }
});

//stdin
process.stdin
  .pipe(decipher)
  .pipe(uncompresser)
  .pipe(untarrer);
