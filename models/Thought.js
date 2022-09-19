const { Schema, model, Types} = require("mongoose");

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: (timeCreated) => moment(timeCreated).format("MMM DD, YYYY [at] hh:mm a")
  },
  username: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought"
    }
  ],
  reactions: [
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

const Thought = model("thought", thoughtSchema);

module.exports = Thought;