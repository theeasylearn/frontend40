var http = require('http');
var RequestHandler = function(request,response)
{
    console.log('I am request handler function');
}
var server = http.createServer((request,response) => RequestHandler(request,response));
server.listen(5000);
console.log('ready to accept request')