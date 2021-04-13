const controller = {};
const db = require('../db');
const Category = require('../db/models/Category');
const { post } = require('../routes/threadRoutes');
const Thread = db.models.threads;
const User = db.models.users;
const Post = db.models.posts;

controller.getThreads = async (req, res, next) => {
    try {
        const threads = await Thread.findAll({
            include: [User, Post]
        })

        res.status(200).send(threads);

    } catch (e) {
        next(e)
    }
};

controller.createThread = async (req, res, next) => {
    try {
        const thread = await Thread.create({
            title: req.body.title,
            userId: req.user.id,
            categoryId: req.body.categoryId
        });

        const post = await Post.create({
            content: req.body.content,
            userId: req.user.id,
            threadId: thread.id
        })
        
        res.status(201).send(post);

    } catch (e) {
        next(e)
    }
};

controller.getThread = async (req, res, next) => {
    try {
        const thread = await Thread.findByPk(req.params.id, {include: [{model: Post, include: [{model: User, attributes: ['username', 'createdAt']}]}]})

        res.status(200).send(thread);
    } catch (e) {
        next(e)
    } 
}


module.exports = controller;