const controller = {};
const db = require('../db');
const Post = db.models.posts;
const User = db.models.users;
const Thread = db.models.threads;

controller.getPosts = async (req, res, next) => {
    try {
        const posts = await Post.findAll({
            include: [User, Thread]
        });

        res.status(200).send(posts);

    } catch(e) {
        next(e);
    }
};

controller.createPost = async (req, res, next) => {
    try {
        const {content, threadId} = req.body;

        const post = await Post.create({
            content,
            threadId,
            userId: req.user.id
        })

        res.status(201).send(post)
    } catch (e) {
        next(e);
    }
};

module.exports = controller;