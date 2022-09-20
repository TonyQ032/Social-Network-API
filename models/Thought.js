const { Schema, model, Types } = require("mongoose");
const moment = require("moment");

const reactionSchema = new Schema({
  reactionId: {
    type: Schema.Types.ObjectId,
    default: () => new Types.ObjectId()
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280
  },
  username: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    get: timeCreated => moment(timeCreated).format("MMM DD, YYYY [at] hh:mm a")
  }
},
  {
    toJSON: {
      getters: true
    }
  }
);

const thoughtSchema = new Schema({
  thoughtText: {
    type: String,
    minLength: 1,
    maxLength: 280,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
    required: true,
    get: (timeCreated) => moment(timeCreated).format("MMM DD, YYYY [at] hh:mm a")
  },
  username: [
    {
      type: Schema.Types.String,
      ref: "User",
      required: true
    }
  ],
  reactions: [reactionSchema]
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

thoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

module.exports = Thought;