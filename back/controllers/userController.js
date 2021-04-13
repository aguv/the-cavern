db = require('../db');
const User = db.models.users;
const Role = db.models.roles;

const controller = {};


controller.getUserByToken = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        res.status(200).send({...user.dataValues, password: ''});
        
    } catch (e) {
        next(e)
    }
}

module.exports = controller;