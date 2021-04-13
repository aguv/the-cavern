const db = require("../db");
const Category = db.models.categories;
const Thread = db.models.threads;
const Post = db.models.posts;
const User = db.models.users;

const controller = {}

controller.getCategories = async (req, res, next) => {
    try {
        const categories = await Category.findAll({include: Thread, order: [['id', 'ASC']]});

        res.status(200).send(categories);
    } catch(e) {
        next(e);
    }    
}

controller.getCategory = async (req, res, next) => {
    try {
        const category = await Category.findByPk(req.params.id, {include: [{model: Thread, include:[{model: Post}, {model: User, attributes: ['username']}]}]});

        res.status(200).send(category);
    } catch(e) {
        next(e)
    }
}

module.exports = controller;