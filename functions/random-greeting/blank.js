
exports.handler = function (context, event, callback) {
  let result;
  let random = Math.round(Math.random());
  if(random > 0){
    result = `Ayoh world! ${random}`;
  }else{
    result = `Hello world! ${random}`;
  }
  callback(null, result);
};
