const db = require("./db/index");
const Role = db.models.roles;
const Category = db.models.categories;

const utils = {}

utils.initialRoles = () => {
    const user = Role.create({
      name: "user"
    });
   
    const mod = Role.create({
      name: "moderator"
    });
   
    const admin = Role.create({
      name: "admin"
    });

    return Promise.all([user, mod, admin]);
}

utils.initialCategories = () => {
    const categories = [
      {title: 'Algorithms & ADTS', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'},
      {title: 'Front-end', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'},
      {title: 'Back-end', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'},
      {title: 'Fullstack', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'},
      {title: 'Databases', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'},
      {title: 'Other technologies & ADTS', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'},
      {title: 'Free zone', description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text.'}
    ];

    const categoriesPromises = categories.map(cat => Category.create(cat));

    return Promise.all([...categoriesPromises]);
}

module.exports = utils;