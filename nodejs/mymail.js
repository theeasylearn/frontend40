//this module contains function to send an email 
//i will create class using class keywords
class MyEmail {
    constructor(sender,password)
    {
        //create instance variables
        this.sender = sender;
        this.password = password;
        console.log('constructor called...');
    }
    sendEmail(receiverEmail,subject,message)
    {
        console.log('i will send email ');
    }
}
module.exports = MyEmail;