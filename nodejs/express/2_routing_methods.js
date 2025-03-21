var express = require('express');
var app = express();
const products = []; //empty array
const ROUTE = "/product"; //read only variable
//get 
//localhost:5000/product 
// purpose : to fetch all products
app.get(ROUTE,function(request,response){
    response.json(products);
});
//post 
//localhost:5000/product 
// purpose : to insert new product 
app.post(ROUTE,function(request,response){
    var newProduct = {
        name:'IPhone 16 pro max',
        price:125000,
        company:'Apple'
    };
    products.push(newProduct);
    response.json([{error:'no'},{message:'product added'}]);
});

//delete 
//localhost:5000/product 
// purpose : to delete existing product 
app.delete(ROUTE,function(request,response){
    
});
//localhost:5000/product 
// purpose : to update detail of existing product 
app.put(ROUTE,function(request,response){
    
});
//create route that accept request for non existing route (404)
app.all("*",function(request,response){
    response.send();
});
app.listen(5000); //start server
console.log('ready to accept request');