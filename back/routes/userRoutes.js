const router = require('express').Router();
const db = require('../db');
const authJwt = require('../middleware/authJwt');
const userController = require('../controllers/userController');

router.get('/all', userController.allAccess);

router.get('/user', [authJwt.verifyToken], userController.userBoard);

router.get('/mod', 
    [
        authJwt.verifyToken,
        authJwt.isAdminOrMod
    ],
    userController.moderatorBoard
);

router.get('/admin', 
    [
        authJwt.verifyToken,
        authJwt.isAdmin
    ],
    userController.adminBoard
);

module.exports = router;