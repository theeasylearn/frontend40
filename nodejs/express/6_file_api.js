var express = require('express');
var fs = require('fs');
var app = express();
var bodyParser = require('body-parser');
//define middleware
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//create route for home page
app.get("/",function(request,response){
    let FileContent = fs.readFileSync("home.html");
    response.send(FileContent.toString());
});

//create route for aboutus page
app.get("/aboutus",function(request,response){
    let FileContent = fs.readFileSync("aboutus.html");
    response.send(FileContent.toString());
});

//create route for contactus page
app.get("/contactus",function(request,response){
    let FileContent = fs.readFileSync("contactus.html");
    response.send(FileContent.toString());
});

//create route for product page
app.get("/product",function(request,response){
    let FileContent = fs.readFileSync("product.html");
    response.send(FileContent.toString());
});

//create route for service page
app.get("/service",function(request,response){
    let FileContent = fs.readFileSync("service.html");
    response.send(FileContent.toString());
});

//create route for not existing page 
app.all("*",function(reqeust,response){
    let FileContent = fs.readFileSync("404.html");
    response.send(FileContent.toString());
});

const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request.....');