const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
  name: { type: String, unique: true },

  location: { type: String },

  time: { type: Number },

  preparationTips: { type: String },

  featured: { type: Boolean, default: false },

  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },
  ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
