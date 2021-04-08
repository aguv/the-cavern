const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const postRoutes = require('./postRoutes');
const threadRoutes = require('./threadRoutes');

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/post', postRoutes);
router.use('/thread', threadRoutes);

module.exports = router;