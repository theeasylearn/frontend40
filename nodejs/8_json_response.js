var http = require('http');
/* 
    localhost:5000/ all products
    localhost:5000/toys return only toys products
    localhost:5000/books return only books products
    localhost:5000/mobile return only mobile products
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
        price: 800
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
    //create variable to store url of the web page for which server has received request
    var url = request.url;
    var output = '';
    console.log(url);
    var output;
    if (url === "/") {
        output = products;
    }
    else if (url === '/toys') {
        //filter product list to get only toys 
        output = products.filter((item) => {
            if(item.category === 'toys')
                return item;
        });
    }
    else if (url === '/books') {
        output = products.filter((item) => {
            if(item.category === 'book')
                return item;
        });
    }
    else if (url === '/mobile') {
        output = products.filter((item) => {
            if(item.category === 'mobile')
                return item;
        });
    }
    else {
        output = JSON.stringify([{error:'no product found'}]);
    }
    response.writeHead(200, { 'content-type': 'application/json' });
    response.write(JSON.stringify(output));
    response.end();
}
var server = http.createServer((request, response) => RequestHandler(request, response));
server.listen(5000);
console.log('ready to accept request');