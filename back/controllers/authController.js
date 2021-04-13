const db = require('../db');
const { SECRET } = process.env;
const User = db.models.users;
const Role = db.models.roles;
const Op = require('sequelize').Op;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const controller = {};

controller.signUp = async (req, res, next) => {
    const {username, email, password} = req.body;
    
    try {
        const user = await User.create({
            username,
            email,
            password: bcrypt.hashSync(password)
        });

        if(req.body.roles) {
            const roles = await Role.findAll({
                where: {
                    name: {
                        [Op.or]: req.body.roles
                    }
                }
            });

            await user.setRoles(roles);
            res.send({ message: "User was registered successfully!" });
            
        } else {
            await user.setRoles([1]);
            res.send({ message: "User was registered successfully!" });
        }

    } catch (e) {
        next(e);
    }
}

controller.signIn = async (req, res, next) => {
    const {username, password} = req.body;

    try {
        const user = await User.findOne({
            where: {
                username
            },
            include: Role
        });
    
        if(!user) return res.status(404).send({ message: 'User not found' });
    
        const isValid = bcrypt.compareSync(password, user.password);
    
        if(!isValid) return res.status(401).send({ message: 'Invalid password' });
    
        const token = jwt.sign({id: user.id}, SECRET, {expiresIn: 3600});

        res.status(200).send({...user.dataValues, password: '', token});

    } catch (e) {
        next(e);
    }
}


module.exports = controller;