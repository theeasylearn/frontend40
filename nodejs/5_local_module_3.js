var http = require('http');
//import local module security.js
var security = require('./security');
var MyEmail = require('./mymail');
var server = http.createServer(function(request,response){
    //create object
    let e = new MyEmail('theeasylearn@gmail.com',123123);
    e.sendEmail('tushar@gmail.com','first email','my email to you, how are you');
});
server.listen(5000);
console.log('ready to accept request...');