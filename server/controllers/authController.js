const config = require('../config');
const jwt = require('jsonwebtoken');

const mongoose = require('mongoose');
const User = mongoose.model('User');


class AuthController {

	constructor() {

	}

	static siginIn(req) {
		return User.load({username: req.body.username}).then((user) => {
			if(!user){
				throw new Error('Whoops, your username is wrong.');
			}
			if (!user.comparePassword(req.body.password)) {
				throw new Error('Whoops, your password are incorrect');
			}
			let token = jwt.sign({_id: user._id}, config.secret, {
				expiresIn: "300d"
			});
			return {token: token};
		}).catch((err) => {
			throw err;
		});
	}

	static siginUp(req) {
		return User.load({username: req.body.username}).then((user)=>{
			if (!user)
				return user;
			else
				throw new Error('User name duplicated');
		})
		.then((user)=>{
			return new User(req.body).save();
		}).catch((err) => {
			throw err;
		});
	}

}

module.exports = AuthController;