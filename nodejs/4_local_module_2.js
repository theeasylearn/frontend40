var http = require('http');
//import local module security.js
var security = require('./security');
var server = http.createServer(async function(request,response){
    //create object
    let sec = new security();
    let hash = await sec.getHashedPassword('apple');
    console.log(hash); //display hash password of apple
    let result = await sec.compareHashedPassword(hash,'apple');
    if(result === true)
        console.log('password match')
    else 
        console.log('password do not match')
});
server.listen(5000);
console.log('ready to accept request...');