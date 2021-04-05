
const Sequelize = require("sequelize");

const {HOST_NAME, DB_NAME} = process.env;

const db = new Sequelize(`postgres://${HOST_NAME}/${DB_NAME}`, {
  logging: false,
});

const User = require("./models/User")(db, Sequelize);
const Role = require('./models/Role')(db, Sequelize);

db.ROLES = ["user", "admin", "moderator"];

Role.belongsToMany(User, {
    through: "user_roles",
    foreignKey: "roleId",
    otherKey: "userId"
});

User.belongsToMany(Role, {
    through: "user_roles",
    foreignKey: "userId",
    otherKey: "roleId"
});


module.exports = db;