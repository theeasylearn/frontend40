//this module contains function to generate has of the given plain text password 
//template function to create class
module.exports = function(PlainTextPassword,HashedPassword=null)
{
    this.PlainTextPassword = PlainTextPassword,
    this.HashedPassword = HashedPassword,
    this.getHashedPassword = function()
    {
        //in future this function will return Hashed Password
        console.log('I will generate HashedPassword');
    },
    this.compareHashedPassword = function(){
        console.log('I will compare PlainText Password and HashedPassword');
    }
}