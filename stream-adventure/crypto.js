crypto = require('crypto');
var stream = crypto.createDecipher('RC4', 'robots').pipe(process.stdout);
.write(Buffer([ 135, 197, 164, 92, 129, 90, 215, 63, 92 ]));
