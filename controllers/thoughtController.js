const { Thought, User } = require("../models");

module.exports = {
  // Get ALL Thoughts
  getAllThoughts(req, res) {
    Thought.find()
      .populate({
        path: "reactions",
        select: "-__v"
      })
      .select("-__v")
      .then(data => res.json(data))
      .catch((err) => {
        res.status(500).json(err)
      })
  },

  // Get Thought by ID
  getThoughtById(req, res) {
    Thought.findOne({ _id: req.params.id })
      .populate({
        path: "reactions",
        select: "-__v"
      })
      .select("-__v")
      .then(data => res.json(data))
      .catch((err) => {
        res.status(500).json(err)
      })
  },

  // Create Thought
  createThought({ params, body }, res) {
    Thought.create(body)
      .then(({ _id }) => {
        return User.findOneAndUpdate(
          { username: body.username },
          { $push: { thoughts: _id } },
          { new: true }
        );
      })
      .then(data => {
        if (!data) {
          res.status(404).json({ message: 'No user found with this username!' });
          return;
        }
        res.json(data);
      })
      .catch((err) => {
        res.status(500).json(err)
      })
  }
};