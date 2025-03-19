var http = require('http');
//localhost:5000 means home page
//localhost:5000/aboutus means aboutus page
//localhost:5000/contactus means contactus page
var RequestHandler = function(request,response)
{
    console.log('I am request handler function');
    //create variable to store url of the web page for which server has received request
    var url = request.url;
    var output = '';
    console.log(url);
    if(url === "/") //home 
        output = "<html><head></head><body><h1>Home </h1><p>this is home page</p></body</html>";
    else if(url === "/aboutus")
        output = "<html><head></head><body><h1>About us</h1><p>this is About page</p></body</html>";
    else if(url === "/contactus")
        output = "<html><head></head><body><h1>Contact us</h1><p>this is Contact page</p></body</html>";
    else 
        output = "<html><head></head><body><h1>Page not found</h1><p>the page you are trying to access does not exist</p></body</html>";

    response.writeHead(200,{'content-type':'text/html'});
    response.write(output);
    response.end();
}
var server = http.createServer((request,response) => RequestHandler(request,response));
server.listen(5000);
console.log('ready to accept request');