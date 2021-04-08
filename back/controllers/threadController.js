const controller = {};
const db = require('../db');
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
            userId: req.user.id
        });
        
        res.status(201).send(thread);

    } catch (e) {
        next(e)
    }
};


module.exports = controller;