const { Schema, model, Types } = require('mongoose');

// Schema used to create User model
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    match: [/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/, "Please enter a valid email address!"]
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User"
    }
  ]
},
  {
    toJSON: {
      virtuals: true,
      getters: true
    },
    id: false
  }
);

// Initialize our model
const User = model("user", userSchema);

module.exports = User;