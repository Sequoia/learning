var byteArray = [0, 15, 24, 3, 250, 83];
var hexBuffer = new Buffer(byteArray);

console.log(hexBuffer.toString('hex'));
