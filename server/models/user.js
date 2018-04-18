const mongoose = require('../libs/mongoose');
const HashPass = require('../libs/HashPass');

let Schema = mongoose.Schema;

let schema = new Schema({
    username : {
         type : String,
         required : true
    },
    password : {
         type : String,
         required : true
    },
});


schema.pre('save', function(next) {
    if(this.isModified('password')) {
        this.password = HashPass.createHash(this.password);
        return next();
    } else {
        return next();
    }   
        
});

module.exports = mongoose.model('User', schema);
const UserModel = mongoose.model('User');