const { Schema, model } = require("mongoose");
// const childSchema = require("./childSchema");

const eventSchema = new Schema({
  name: { type: String, unique: true },

  location: { type: String },

  time: { type: Number },

  date: {
    type: Date,
    default: Date.now
  },

  preparationTips: { type: String },

  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },
  ],
});

const Event = model("event", eventSchema);

module.exports = Event;
