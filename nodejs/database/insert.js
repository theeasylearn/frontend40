var c = require('./connection.js');
var sql = "insert into person (name,gender,dob,salary) values('Rut Mavani','1','2005-12-31','29000')";
//run sql command 
c.con.query(sql,function(error,result){
    if(error)
    {
        console.log(error);
    }    
    else 
    {
        //detail about executed query 
        console.log('New row id ',result.insertId);
        console.log('Affected rows ',result.affectedRows);
        console.log(result);
    }
});
c.con.end();

