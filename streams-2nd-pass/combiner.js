var combine = require('stream-combiner');
var through2= require('through2');
var zlib = require('zlib');

var byGenre = [];

function write(buf,enc,next){
  var input = JSON.parse(buf.toString());
  if(input.type === 'genre'){
    byGenre.push({name:input.name, books: []});
  }else{
    byGenre[byGenre.length-1].books.push(input.name);
  }
  next();
}

function end(done){
  emit = this.push.bind(this);
  byGenre.forEach(function(genre){
    emit(JSON.stringify(genre)+"\n");
  });
  done();
}

var groupbyg = through2(write,end);

module.exports = function () {
    return combine( groupbyg, zlib.createGzip() );
};
