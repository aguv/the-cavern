const jwt = require('jsonwebtoken');
const db = require('../db');
const User = db.models.users;
const { SECRET } = process.env;

const verifyToken = (req, res, next) => {
    let token = req.headers["x-access-token"];

    if (!token) {
        return res.status(403).send({
            message: "No token provided!"
        });
    }

    jwt.verify(token, SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized!"
            });
        }

        req.user = decoded;
        next();
    });
};

const isAdmin = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        const userRoles = await user.getRoles();
        let isAdmin = false;

        userRoles.map(role => {
            if (role.name === 'admin') {
                isAdmin = true;
            }
        })
    
        if (isAdmin) {
            next();
        } else {
            res.status(403).send({
                message: 'You need an ADMIN role.'
            });
        }

    } catch (e) {
        next(e);
    }
};


const isAdminOrMod = async (req, res, next) => {
    try {
        const user = await User.findByPk(req.user.id);
        const userRoles = await user.getRoles();
        let isAdmOrMod = false;

        userRoles.map(role => {
            if (role.name === 'admin' || role.name === 'moderator') {
                isAdmOrMod = true; 
            }
        })
    
        if (isAdmOrMod) next()
        else {
            res.status(403).send({
                message: 'You need an ADMIN role.'
            });
        }        
    } catch (e) {
        next(e);
    }
};

const authJWT = {
    verifyToken,
    isAdmin,
    isAdminOrMod
};

module.exports = authJWT;
