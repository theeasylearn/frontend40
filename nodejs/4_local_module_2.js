var http = require('http');
//import local module security.js
var security = require('./security');
var server = http.createServer(function(request,response){
    //create object
    let sec = new security('apple');
    sec.getHashedPassword();
    sec.compareHashedPassword();
});
server.listen(5000);
console.log('ready to accept request...');