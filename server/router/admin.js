const express = require('express');
const router = express.Router();

const isAuth = require('../middleware/isAuth');

let authController = require('../controllers/authController');

const runAction =  (action, req, res) => {
    action(req, res)
        .then( (data) => {
            console.log("Data : " + data);
            res.status(200).send(data);
            return;
        })
        .catch((err) => {
            console.log('Router: ' + err);
            res.status(err.status || 400).send(err);
            return;
        });
};

router.get('/', (req, res) => {
    res.json({status: "/admin is running healthy."});
});

router.get('/auth/',  isAuth, (req, res) => runAction(authController.signin, req, res));

module.exports = router;