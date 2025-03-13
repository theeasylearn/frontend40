// how to create server 
var http = require('http');
var server = http.createServer(function(request,response){
    //all the code in this function will execute for each request received by server
    var now = new Date();
    var currentDate = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    var currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    console.log(currentDate,currentTime);
});
//have to give port upon which server will receive request
const portno = 5000; //const means read only variable
server.listen(portno);
console.log('ready to accept request');