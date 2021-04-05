const router = require('express').Router();
const authController = require('../controllers/authController');
const verifySignUp = require('../middleware/verifySignUp');

router.post('/signup',
    [
        verifySignUp.checkDuplicateUsernameOrEmail
    ],
    authController.signUp);

router.post('/signIn', authController.signIn);

module.exports = router;
