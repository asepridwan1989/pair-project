var bcrypt = require('bcrypt');
const saltRounds = 10;

class Password{
  static salt(myPlaintextPassword,callback){
    bcrypt.genSalt(saltRounds, function(err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
            // Store hash in your password DB.
            callback(hash)
        });
    });
  }
    static check(password,hash, callback){
      bcrypt.compare(password, hash, function(err, res) {
          // res == true
         callback(res)
      });
    }
}


module.exports = Password