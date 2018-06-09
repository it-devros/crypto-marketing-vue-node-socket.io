const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
let authController = require('../controllers/authController');

const runAction =  (action, req, res) => {
	action(req, res)
		.then( (data) => {
			res.status(200).send(data);
			return;
		})
		.catch((err) => {
			res.status(err.status || 400).send(err);
			return;
		});
};

router.get('/', (req, res) => {
	res.json({status: "/auth is running healthy."});
});

router.post('/signin', (req, res) => runAction(authController.siginIn, req, res));
router.post('/signup', (req, res) => runAction(authController.siginUp, req, res));

module.exports = router;