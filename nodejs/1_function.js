function printCurrentDate()
{
    //create object of data class
    var now = new Date();
    var today = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    console.log(today);
}
//call function 
printCurrentDate()
