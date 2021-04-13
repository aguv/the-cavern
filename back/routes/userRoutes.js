const router = require('express').Router();
const db = require('../db');
const authJwt = require('../middleware/authJwt');
const userController = require('../controllers/userController');

router.get('/userbytoken', [authJwt.verifyToken], userController.getUserByToken);


module.exports = router;