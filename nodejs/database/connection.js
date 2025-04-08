var mysql = require('mysql')
var con = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    port:3306, 
    database:'frontend40'
});
con.connect(function(error){
    if(error!=null)
    {
        console.log(error);
    }
    else 
    {
        console.log('connection established....');
    }
});
//required 
module.exports.con = con;