module.exports = (sequelize, Sequelize) => {
    const Post = sequelize.define("posts", {
        content: {
            type: Sequelize.TEXT
        }
    });
  
    return Post;
};

