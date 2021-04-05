const controller = {};

controller.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
};

controller.userBoard = (req, res) => {
    res.status(200).send("User Content.");
};

controller.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};

controller.moderatorBoard = (req, res) => {
    res.status(200).send("Moderator Content.");
};

module.exports = controller;