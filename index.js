module.exports = function(ctx, stereo, bufSize){
  bufSize = bufSize || 4096;
  var node = ctx.createScriptProcessor(bufSize, 1, 2);
  node.onaudioprocess = function(e){
    var outBufferL = e.outputBuffer.getChannelData(0);
    var outBufferR = e.outputBuffer.getChannelData(1);
    for (var i = 0; i < bufSize; i++){
      outBufferL[i] = Math.random() * 2 - 1;
      outBufferR[i] = stereo ? Math.random() * 2 - 1 : outBufferL[i];
    }
  }
  return node;
};
