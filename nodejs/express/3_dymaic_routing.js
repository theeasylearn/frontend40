var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//define middleware
//require below 2 middleware to accept input submitted by post, put, delete method 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var products = []; //empty array
const ROUTE = "/product"; //read only variable
//get 
//localhost:5000/product 
// purpose : to fetch all products

//get 
//localhost:5000/product/Apple 
// purpose : to fetch all products of given company
// In Express.js, you can make a route parameter optional by using a ? after the parameter name. Here's how you can modify your route to make the make parameter optional:
app.get(ROUTE + "/:make?", function (request, response) {
    let make = request.params.make; 
    if(make === undefined) //optional parameter is not supplied
        response.json(products);
    else 
    {
        //optional parameter is supplied
        let temp = products.filter((item) => {
            if(item.company === make)
                return item;
        });
        if(temp.length === 0)
            response.json([{ error: 'product not found' }]);
        else 
            response.json(temp);
    }
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
        response.json([{ error: 'input is missing, kindly give name,price and company' }]);
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
    var ProductName = request.body.name;
    var isFound = false;
    var temp = products.map((item) => {
        if(item.name !== ProductName)
            return item;
        else 
            isFound = true;
    });
    if(isFound == true)
    {
        products = temp;
        response.json([{ error: 'no' }, { message: 'product deleted' }]);
    }
    else 
    {
        response.json([{ error: 'no' }, { message: 'product not found' }]);
    }
});
//localhost:5000/product 
// purpose : to update detail of existing product 
app.put(ROUTE, function (request, response) {
    var ProductName = request.body.name;
    var ProductPrice = request.body.price;
    var ProductCompany = request.body.company;
    //check if all inputs are given or not (input validation)
    if (ProductName === undefined || ProductPrice === undefined || ProductCompany === undefined) {
        response.json([{ error: 'input is missing, kindly give name,price and company' }]);
    }
    else 
    {
        let isFound = false;
        let temp = products.map((item) => {
            if(item.name === ProductName)
            {
                var updatedProduct = {
                    name: ProductName,
                    price: ProductPrice,
                    company: ProductCompany
                };
                isFound = true;
                return updatedProduct;
            }    
            else 
                return item;
        }); //end of map 
        if(isFound === true)
        {
            products = temp;
            response.json([{ error: 'no' }, { message: 'product updated' }]);
        }    
        else 
            response.json([{ error: 'no' }, { message: 'product not found' }]);   
    }
});
//create route that accept request for non existing route (404)
app.all("*", function (request, response) {
    response.send();
});
app.listen(5000); //start server
console.log('ready to accept request');