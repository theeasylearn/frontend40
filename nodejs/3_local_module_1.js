// how to create server 
var http = require('http');
var mydatetime = require('./mydatetime');
var name = require('./classname.js');
var detail = require('./details.js');
var mymath = require('./math.js');
var cur = require('./currency.js');
var server = http.createServer(function(request,response){
    //all the code in this function will execute for each request received by server

    console.log(mydatetime.getDateTime()); //calling function from imported local module
    console.log(mydatetime.getDate()); //calling function from imported local module
    console.log(mydatetime.getTime()); //calling function from imported local module
    console.log(name); //the easylearn academy
    console.log(detail.address);
    console.log(detail.city);
    console.log(detail.pincode);
    console.log("addition =" + mymath.add(10,5));
    console.log("subtraction =" + mymath.sub(10,5));
    console.log("multiplication =" + mymath.mul(10,5));
    console.log("division =" + mymath.div(10,5));
    console.log("100 Rs = Dollar value = " + cur.toDollar(100));
    console.log("100 Rs = Euro value = " + cur.toEuro(100));
    console.log("100 Rs = Pound value = " + cur.toPound(100));
});
//have to give port upon which server will receive request
const portno = 5000; //const means read only variable
server.listen(portno);
console.log('ready to accept request');
