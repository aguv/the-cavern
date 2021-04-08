module.exports = (sequelize, Sequelize) => {
    const Thread = sequelize.define("threads", {
        title: {
            type: Sequelize.STRING
        }
    });
  
    return Thread;
};

