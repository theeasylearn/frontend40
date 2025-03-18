//this module contains function to generate hash of the given plain text password 
//template function to create class
var argon2 = require('@node-rs/argon2')
module.exports = function (PlainTextPassword) {
        this.getHashedPassword = async function (PlainTextPassword) {
            var hash = await argon2.hash(PlainTextPassword)
            return hash
        },
        this.compareHashedPassword = async function (HashedPassword,PlainTextPassword) {
            try 
            {
                return await argon2.verify(HashedPassword,PlainTextPassword)
            } 
            catch (err) 
            {
                console.log(err)
            }
        }
}