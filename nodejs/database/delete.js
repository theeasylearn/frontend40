var c = require('./connection.js');
var sql = "delete from person where id = 1"
// run query 
c.con.query(sql,function(error,result){
    if(error!=null)
        console.log(error)
    else 
    {
        if (result.affectedRows == 0)
            console.log('no rows has been deleted')
        else 
            console.log('row has been deleted');
    }
});
c.con.end();