const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');
let mainController = require('../controllers/mainController');

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
	res.json({status: "/main is running healthy."});
});

router.get('/all', (req, res) => runAction(mainController.getAll, req, res));
router.post('/save', (req, res) => runAction(mainController.saveOne, req, res));

module.exports = router;