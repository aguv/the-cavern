const router = require('express').Router();
const categoryController = require('../controllers/categoryController');
const authJwt = require('../middleware/authJwt');

router.get('/', categoryController.getCategories);
router.get('/:id', categoryController.getCategory);

module.exports = router;
