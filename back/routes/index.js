const router = require('express').Router();
const userRoutes = require('./userRoutes');
const authRoutes = require('./authRoutes');
const postRoutes = require('./postRoutes');
const threadRoutes = require('./threadRoutes');
const categoryRoutes = require('./categoryRoutes');

router.use('/user', userRoutes);
router.use('/auth', authRoutes);
router.use('/post', postRoutes);
router.use('/thread', threadRoutes);
router.use('/category', categoryRoutes);

module.exports = router;