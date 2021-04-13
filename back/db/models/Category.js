module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("categories", {
        title: {
            type: Sequelize.STRING
        },
        description: {
            type: Sequelize.TEXT
        }
    });
  
    return Category;
};

