var http = require('http');
var url = require('url');
/* 
    localhost:5000/ all products
    localhost:5000/category?name=toys&low=800&high=1400
*/
//array/list of object
const products = [
    {
        name: "Lego Set",
        description: "Building Blocks",
        category: 'toys',
        price: 1200
    },
    {
        name: "Remote Control Car",
        description: "Electronic Toys",
        category: 'toys',
        price: 2500
    },
    {
        name: "Teddy Bear",
        description: "Stuffed Toys",
        category: 'toys',
        price: 900
    },
    {
        description: "Apple",
        name: "iPhone 14 Pro",
        price: 119999,
        category: "mobile"
    },
    {
        description: "Samsung",
        name: "Galaxy S23 Ultra",
        price: 124999,
        category: "mobile"
    },
    {
        description: "OnePlus",
        name: "OnePlus 11R",
        price: 39999,
        category: "mobile"
    },
    {
        name: "The Alchemist",
        description: "Paulo Coelho",
        price: 499,
        category: "book"
    },
    {
        name: "Atomic Habits",
        description: "James Clear",
        price: 699,
        category: "book"
    },
    {
        name: "Rich Dad Poor Dad",
        description: "Robert Kiyosaki",
        price: 399,
        category: "book"
    }
];
var RequestHandler = function (request, response) {
    console.log('I am request handler function');
    //below line will convert String url into url object 
    //so that one can access any part of url
    var RequestedURL = url.parse(request.url, true);
    var output = '';
    console.log(RequestedURL);
    // var output;
    if (RequestedURL.pathname === "/") {
        output = products;
    }
    else if (RequestedURL.pathname === '/category') {
        var data = RequestedURL.query; //return object which might have 3 property (name,start,end)
        var { name, low, high } = data; //object destructring
        console.log(name, low, high);

        if (name === undefined || low === undefined || high === undefined) {
            output = JSON.stringify([{ error: 'please give name, low, high' }]);
        }
        else {
            low = parseInt(low);
            high = parseInt(high);
            output = products.filter((item) => {
                if(item.category === name && item.price>=low && item.price<=high)
                    return item;
            });
        }

    }
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write(JSON.stringify(output));
    response.end();
}
var server = http.createServer((request, response) => RequestHandler(request, response));
server.listen(5000);
console.log('ready to accept request');