var argon2 = require('@node-rs/argon2');
async function  HashPassword()  {
    var HashedPassword = await argon2.hash(PlainTextPassword)
    console.log(HashedPassword)
}
var PlainTextPassword = "Audi-BMW";
HashPassword(PlainTextPassword)