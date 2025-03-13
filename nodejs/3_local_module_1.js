// how to create server 
var http = require('http');
var mydatetime = require('./mydatetime');
var server = http.createServer(function(request,response){
    //all the code in this function will execute for each request received by server

    console.log(mydatetime.getDateTime()); //calling function from imported local module
    console.log(mydatetime.getDate()); //calling function from imported local module
    console.log(mydatetime.getTime()); //calling function from imported local module
});
//have to give port upon which server will receive request
const portno = 5000; //const means read only variable
server.listen(portno);
console.log('ready to accept request');