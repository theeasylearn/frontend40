//functions
function getDate()
{
    var now = new Date();
    var today = now.getDate() + "/" + (now.getMonth()+1) + "/" + now.getFullYear();
    return today;
}
function getTime()
{
    var now = new Date();
    var currentTime = now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    return currentTime;
}
function getDateTime()
{
    return getDate() + " " + getTime();
}
module.exports.getDate = getDate;
module.exports.getTime = getTime;
module.exports.getDateTime = getDateTime;
