var c = require('./connection.js');
var sql = "update person set name='Hitesh Patel',salary = 99999 where id=5";
c.con.query(sql,function(error,result){
    if(error)
        console.log(error);
    else 
    {
        let count = result.affectedRows; //affectedRows return how many inserted/updated/deleted by sql
        if(count === 0)
            console.log('none of the rows updated');
        else 
            console.log(`${count} rows updated`);
    }
    c.con.end();
});
