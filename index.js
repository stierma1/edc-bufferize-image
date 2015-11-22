"use strict"

var Worker = require("basic-distributed-computation").Worker;

class BufferizeImage extends Worker {
  constructor(parent){
    super("bufferize-image", parent);
  }

  work(req, inputKey, outputKey){

    var inputVal = req.body;
    if(inputKey){
        inputVal = req.body[inputKey];
    }
    var output = new Buffer(inputVal.data);
    if(outputKey){
      req.body[outputKey] = output;
    } else {
      req.body = output;
    }
    req.next();


  }
}

module.exports = BufferizeImage;
