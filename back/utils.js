const db = require("./db/index");
const Role = db.models.roles;

const utils = {}

utils.initial = function() {
    const user = Role.create({
      id: 1,
      name: "user"
    });
   
    const mod = Role.create({
      id: 2,
      name: "moderator"
    });
   
    const admin = Role.create({
      id: 3,
      name: "admin"
    });

    Promise.all([user, mod, admin]);
}

module.exports = utils;