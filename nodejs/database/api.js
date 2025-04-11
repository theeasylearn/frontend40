var express = require('express');
var c = require('./connection.js'); //import connection file 
var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create routes 
//(register) insert new user 
app.post("/user/register",function(request,response){
    
    let sql = "insert into users (email,mobile,password) values('tushar@gmail.com','123123','apple')";
    c.con.query(sql,function(error,result) ////run sql command 
    {
        if(error)
        {
            console.log(error);
            response.json([{'error':'oops something went wrong, contact developer'}])
        }    
        else 
        {
            response.json([{'error':'no'},{'success':'yes'},{'message':'register successful'}]);
        }
    });
});

//login api 
app.post("/user/login",function(request,response){

});

//change password 
app.post("/user/change-password",function(request,response){

});

//forgot password
app.post("/user/forgot-password",function(request,response){

});
app.listen(5000);
console.log('ready to accept request.');