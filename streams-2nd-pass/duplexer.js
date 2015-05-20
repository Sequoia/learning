duplex = require('duplexer');
cp = require('child_process');

module.exports = function(cmd, args){
  proc = cp.spawn(cmd,args);
  return duplex(proc.stdin, proc.stdout);
};
