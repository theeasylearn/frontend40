var express = require('express');
var app = express();
//localhost:5000 means home page
app.get("/",function(request,response){
    response.send("<html><head></head><body><h1>Home </h1><p>this is home page</p></body</html>");
});
///localhost:5000/aboutus means aboutus page
app.get("/aboutus",function(request,response){
    response.send("<html><head></head><body><h1>About us</h1><p>this is About page</p></body</html>");
});
//localhost:5000/contactus means contactus page
app.get("/contactus",function(request,response){
    response.send("<html><head></head><body><h1>Contact us</h1><p>this is contact us</p></body</html>");
});
//create route that accept request for non existing route (404)
app.all("*",function(request,response){
    response.send("<html><head></head><body><h1>Page not found</h1><p>the page you are trying to access does not exist</p></body</html>");
});
app.listen(5000); //start server
console.log('ready to accept request');