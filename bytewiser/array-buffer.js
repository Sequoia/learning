inputInt = process.argv[2];
array32 = new Uint32Array(1);
array32.set([inputInt]);
array16 = new Uint16Array(array32.buffer);
console.log(JSON.stringify(array16));
