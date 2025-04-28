var express = require('express');
var c = require('./connection.js'); //import connection file 
var validator = require('validator');

var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create routes 
//(register) insert new user 
app.post("/user/register", function (request, response) {
    //create 3 variables using object destruction technique
    let { email, mobile, password } = request.body;
    //check all required input is supplied when api called 
    if (email === undefined || mobile === undefined || password === undefined) {
        response.json([{ 'error': 'email, mobile password is required' }])
    }
    else {
        let sql = "insert into users (email,mobile,password) values(?,?,?)";
        //each question is for input there are 3 question mark so we have to create list with 3 items
        let data = [email, mobile, password];

        c.con.query(sql, data, function (error, result) ////run sql command 
        {
            if (error != null) {
                console.log(error);
                response.json([{ 'error': 'oops something went wrong, contact developer' }])
            }
            else {
                response.json([{ 'error': 'no' }, { 'success': 'yes' }, { 'message': 'register successful' }]);
            }
        });
    }


});

//login api 
app.post("/user/login", function (request, response) {

});

//change password 
app.post("/user/change-password", function (request, response) {

});

//forgot password
app.post("/user/forgot-password", function (request, response) {

});
app.listen(5000);
console.log('ready to accept request.');