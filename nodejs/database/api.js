var express = require('express');
var c = require('./connection.js'); //import connection file 
var validator = require('validator');

var app = express();
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create routes 
//(register) insert new user 
//required input email,mobile, password
//localhost:5000/user/register 
//method = post 

app.post("/user/register", function (request, response) {
    let { email, mobile, password } = request.body;

    // Validate input presence
    if (email === undefined || mobile === undefined || password === undefined) {
        return response.json([{ 'error': 'email, mobile, and password are required' }]);
    }

    // Trim input (remove leading and trailing extra space from input)
    email = validator.trim(email); //'   ankit3385@gmail.com  ' convert to 'ankit3385@gmail.com'
    mobile = validator.trim(mobile);
    password = validator.trim(password);

    //sanitize inputs to prevent XSS
    //validator.escape() converts characters like <, >, &, ', " into HTML entities, to stop  script injections.
    email = validator.escape(email);
    mobile = validator.escape(mobile);
    password = validator.escape(password);

    //to prevent sql injection
    let sql = "INSERT INTO users (email, mobile, password) VALUES (?, ?, ?)";
    let data = [email, mobile, password];

    c.con.query(sql, data, function (error, result) {
        if (error) {
            console.log(error);
            return response.json([{ 'error': 'oops something went wrong, contact developer' }]);
        } else {
            return response.json([
                { 'error': 'no' },
                { 'success': 'yes' },
                { 'message': 'register successful' }
            ]);
        }
    });
});

//login api 
//required input email, password
//localhost:5000/user
//method = post 
app.post("/user/login", function (request, response) {
    let email = request.body.email;
    let password = request.body.password;
    if (email === undefined || password === undefined) {
        return response.json([{ 'error': 'email and password are required' }]);
    }
    else {
        // Trim input (remove leading and trailing extra space from input)
        email = validator.trim(email); //'   ankit3385@gmail.com  ' convert to 'ankit3385@gmail.com'
        password = validator.trim(password);

        //sanitize inputs to prevent XSS
        //validator.escape() converts characters like <, >, &, ', " into HTML entities, to stop  script injections.
        email = validator.escape(email);
        password = validator.escape(password);

        let sql = "select * from users where email=? and password = ?";
        let data = [email, password];

        c.con.query(sql, data, function (error, result) {
            if (error) {
                console.log(error);
                return response.json([{ 'error': 'oops something went wrong, contact developer' }]);
            }
            else {
                if (result.length === 0) {
                    return response.json([
                        { 'error': 'no' },
                        { 'success': 'no' },
                        { 'message': 'invalid login attempt' },
                    ]);
                }
                else {
                    // console.log(result);
                    return response.json([
                        { 'error': 'no' },
                        { 'success': 'yes' },
                        { 'message': 'login successful' },
                        { 'id': result[0]['id'] },
                    ]);
                }
            }
        });
    }
});

//change password 
//required input id,oldpassword,newpassword
//localhost:5000/user/change_password
//method = post 

app.post("/user/change-password", function (request, response) {

    let { id, oldpassword, newpassword } = request.body;

    if(id === undefined || oldpassword === undefined || newpassword === undefined)
    {
        return response.json([{ 'error': 'id and old password and new password are required' }]);
    }
    else 
    {
        id = validator.trim(id); //'   ankit3385@gmail.com  ' convert to 'ankit3385@gmail.com'
        oldpassword = validator.trim(oldpassword);
        newpassword = validator.trim(newpassword);

        id = validator.escape(id);
        oldpassword = validator.escape(oldpassword);
        newpassword = validator.escape(newpassword);

        

        let sql = "update users set password=? where id=? and password=?";
        let data = [newpassword,id,oldpassword];
    
        c.con.query(sql, data, function (error, result) {
            if (error != null) {
                console.log(error);
                return response.json([{ 'error': 'oops something went wrong, contact developer' }]);
            }
            else {
                if (result.affectedRows >= 1) {
                    return response.json([
                        { 'error': 'no' },
                        { 'success': 'yes' },
                        { 'message': 'password change successful' },
                    ]);
                }
                else 
                {
                    return response.json([
                        { 'error': 'no' },
                        { 'success': 'no' },
                        { 'message': 'invalid old password' },
                    ]);
                }
            }
        });
    }
   
});

//forgot password
app.post("/user/forgot-password", function (request, response) {

});
app.listen(5000);
console.log('ready to accept request.');