var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//define middleware
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const products = []; //empty array
const ROUTE = "/product"; //read only variable
//get 
//localhost:5000/product 
// purpose : to fetch all products
app.get(ROUTE, function (request, response) {
    response.json(products);
});
//post 
//localhost:5000/product 
// required input : name, price, company

// purpose : to insert new product 
app.post(ROUTE, function (request, response) {
    var ProductName = request.body.name;
    var ProductPrice = request.body.price;
    var ProductCompany = request.body.company;
    //check if all inputs are given or not (input validation)
    if (ProductName === undefined || ProductPrice === undefined || ProductCompany === undefined) {
        response.json([{ error: 'input is missing, kindly given name,price and company' }]);
    }
    else {
        var newProduct = {
            name: ProductName,
            price: ProductPrice,
            company: ProductCompany
        };
        products.push(newProduct);
        response.json([{ error: 'no' }, { message: 'product added' }]);
    }

});

//delete 
//localhost:5000/product 
// purpose : to delete existing product 
app.delete(ROUTE, function (request, response) {
    products.pop(); //remove last element from array/list
    response.json([{ error: 'no' }, { message: 'product deleted' }]);
});


//localhost:5000/product 
// purpose : to update detail of existing product 
app.put(ROUTE, function (request, response) {

    response.json([{ error: 'no' }, { message: 'product updated' }]);
});
//create route that accept request for non existing route (404)
app.all("*", function (request, response) {
    response.send();
});
app.listen(5000); //start server
console.log('ready to accept request');