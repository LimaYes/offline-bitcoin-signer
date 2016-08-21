var bitcore = require('bitcore-lib');
var Message = require('bitcore-message');
var dumbsign = function(wif,msg){
var privateKey = bitcore.PrivateKey.fromWIF(wif);
var signature = Message(msg).sign(privateKey);
return signature;
}
exports.dumbsign = dumbsign
