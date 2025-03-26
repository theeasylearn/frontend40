var express = require('express');
var app = express();
//define middleware 
app.use(function(request,response,next){
    console.log('I am middleware function. I will execute before request  is processed by routing function');
    console.log(request.url);
    console.log(request.method);
    //add logic to not to accept request for any routes before 8am and after 5pm 
    var now = new Date();
    let CurrentHour = now.getHours(); //return hours of current time 
    if(CurrentHour<9 || CurrentHour>17)
        response.send('fees can be paid only between 8 am and 5 pm')
    else 
        next();
});
//define routes 
app.get("/gujarati/fees",function(request,response){
    response.send('we have received your fees for gujarati school. please check your email to download fee receipt');
});
app.get("/english/fees",function(request,response){
    response.send('we have received your fees for english school. please check your email to download fee receipt');
});
app.get("/college/fees",function(request,response){
    response.send('we have received your fees for college. please check your email to download fee receipt');
});
app.listen(5000);
console.log('ready to accept request');