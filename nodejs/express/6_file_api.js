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
        //fs.writeFileSync(FILENAME,content);
        fs.appendFileSync(FILENAME,content);
        response.redirect('http://localhost:5000/contactus?msg=content saved.'); 
        //  fs.appendFile(FILENAME,content,function(error){
        //     if(error)
        //         response.redirect('http://localhost:5000/contactus?msg=content can not be saved.'); 
        //     else 
        //         response.redirect('http://localhost:5000/contactus?msg=content has been saved.'); 
        // });
    }
});

app.get("/delete",function(request,response){
    
    fs.unlinkSync('friends.txt');
    response.send('file has been deleted');
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
app.get("/rename",function(request,response){
    
    var oldFileName = 'friends.txt';
    var newFileName = 'mitro.txt';
    fs.renameSync(oldFileName,newFileName);
    response.send('file has been renamed');
});


//create route for not existing page 
app.all("*",function(reqeust,response){
    let FileContent = fs.readFileSync("404.html");
    response.send(FileContent.toString());
});

const PORTNO = 5000;
app.listen(PORTNO);
console.log('ready to accept request.....');