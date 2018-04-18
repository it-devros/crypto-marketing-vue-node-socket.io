const config = require('../config');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = mongoose.model('User');


class AuthController {
    constructor() {
    }
    
    static signin(req) {
        return User.load({email: req.body.email}).then((user) => {
            if(!user){
                throw new Error('Whoops, your email is wrong.', 'UNAUTH');
            }
            if (!user.comparePassword(req.body.password)) {
                throw new Error('Whoops, your password are incorrect', 'UNAUTH');
            }
            let token = jwt.sign({_id: user._id}, config.secret, {
                expiresIn: "300d"
            });
            return {token: token};
        }).catch(err=>{
            throw err;
        });

    }

}

module.exports = AuthController;