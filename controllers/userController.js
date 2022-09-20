const { User } = require("../models");

module.exports = {
  // Get ALL users
  getAllUsers(req, res) {
    User.find()
      .populate({
        path: "thoughts",
        select: "-__v"
      })
      .select("-__v")
      .then(data => res.json(data))
      .catch((err) => {
        res.status(500).json(err)
      })
  },

  // Get user by ID
  getUserById(req, res) {
    User.findOne({ _id: req.params.id })
      .populate({
        path: "thoughts",
        select: "-__v"
      })
      .populate({
        path: "friends",
        select: "-__v"
      })
      .select("-__v")
      .then(data => res.json(data))
      .catch((err) => {
        res.status(500).json(err)
      })
  }


};