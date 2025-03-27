var express = require('express');
var fs = require('fs');
var app = express();

//create route for home page
app.get("/",function(request,response){
    
    fs.readFile('home.html',function(error,Content){
        response.send(Content.toString()); //it will return home.html as response
    });
});

//create route for aboutus page
app.get("/aboutus",function(request,response){
    fs.readFile('aboutus.html',function(error,Content){
        response.send(Content.toString()); //it will return home.html as response
    });
});

//create route for contactus page
app.get("/contactus",function(request,response){
    fs.readFile('contactus.html',function(error,Content){
        response.send(Content.toString()); //it will return home.html as response
    });
});

//create route for product page
app.get("/product",function(request,response){
    fs.readFile('product.html',function(error,Content){
        response.send(Content.toString()); //it will return home.html as response
    });
});

//create route for service page
app.get("/service",function(request,response){
    fs.readFile('service.html',function(error,Content){
        response.send(Content.toString()); //it will return home.html as response
    });
});

//create route for not existing page 
app.all("*",function(reqeust,response){
    fs.readFile('404.html',function(error,Content){
        response.send(Content.toString()); //it will return home.html as response
    });
});

const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request.....');