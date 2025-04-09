var c = require('./connection.js');
var sql = "select id,name,gender,salary,date_format(dob,'%a %d-%m-%Y') as dob from person order by name";
//run sql command 
c.con.query(sql, function (error, result, fields) {
    if (error)
        console.log(error);
    else {
        //result is an array that has all data as per select statement
        let rowCount = result.length; //length returns no of element in result array
        //display field heading 
        console.log('-'.repeat(60));
        console.log('ID'.padEnd(10) +'Name'.padEnd(10) +'Gender'.padEnd(15) +'DOB'.padEnd(15) +'Salary'.padEnd(10));
        console.log('-'.repeat(60));
        for (let index = 0; index < rowCount; index++) {
            let row = result[index]; //copy object at given position in row
            console.log(String(row.id).padEnd(5), " ", row.name.padEnd(15), " ", String(row.gender).padEnd(5), " ", row.dob.padEnd(15), " ", String(row.salary).padEnd(10));
        }
    }
    c.con.end();
});
