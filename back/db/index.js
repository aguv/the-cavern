
const Sequelize = require("sequelize");

const {HOST_NAME, DB_NAME} = process.env;

const db = new Sequelize(`postgres://${HOST_NAME}/${DB_NAME}`, {
  logging: false,
});

const User = require("./models/User")(db, Sequelize);
const Role = require('./models/Role')(db, Sequelize);
const Post = require('./models/Post')(db, Sequelize);
const Thread = require('./models/Thread')(db, Sequelize);

db.ROLES = ["user", "admin", "moderator"];

Post.belongsTo(User);
User.hasMany(Post);

Post.belongsTo(Thread);
Thread.hasMany(Post);

Thread.belongsTo(User);
User.hasMany(Thread);


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