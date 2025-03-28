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

app.post("/contactus",function(request,response){
    var contactName = request.body.name;
    var contactEmail = request.body.email;
    var contactMessage = request.body.message;
    if(!contactName || !contactEmail || !contactMessage)
        response.send('input is missing, name, email, message required');
    else 
    {
        const FILENAME = "contact.txt";
        var content = "\nName " + contactName + " Email " + contactEmail + " Message " + contactMessage + "\n";
        // fs.writeFile(FILENAME,content,function(error){
        //     if(error)
        //         response.send('content can not be saved.'); 
        //     else 
        //         response.send('content has been saved....'); 
        // });
         fs.appendFile(FILENAME,content,function(error){
            if(error)
                response.redirect('http://localhost:5000/contactus?msg=content can not be saved.'); 
            else 
                response.redirect('http://localhost:5000/contactus?msg=content has been saved.'); 
        });
    }
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