const router = require('express').Router();
const postController = require('../controllers/postController');
const authJwt = require('../middleware/authJwt');

router.get('/', postController.getPosts);

router.post('/',
    [
        authJwt.verifyToken,
    ],
    postController.createPost
)

module.exports = router;
