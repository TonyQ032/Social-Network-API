const { Schema, model } = require('mongoose');

// Schema used to create User model
const userSchema = new Schema({

})

// Initialize our model
const User = model("user", userSchema);

module.exports = User;