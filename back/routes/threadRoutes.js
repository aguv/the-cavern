const router = require('express').Router();
const threadController = require('../controllers/threadController');
const authJwt = require('../middleware/authJwt');

router.get('/', threadController.getThreads)
router.post('/',
    [
        authJwt.verifyToken,
    ],
    threadController.createThread
)

module.exports = router;
