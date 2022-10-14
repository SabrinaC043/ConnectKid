const { Schema, model } = require("mongoose");
// const childSchema = require("./childSchema");
const Parent = require("./Parent");
const eventSchema = new Schema({
  name: { type: String, unique: true },

  location: { type: String },

  time: { type: Number },


    preparationTips: { type: String },

    isFeatured: {type: Boolean, default: false}

  // attendees: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: "Parent",
  //   },
  // ],
});

const Event = model("Event", eventSchema);

module.exports = Event;
