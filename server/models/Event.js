const { Schema, model } = require("mongoose");
<<<<<<< HEAD
// const childSchema = require("./childSchema");
=======
>>>>>>> 1bd686409ece69b208f530f922b1e162fd7d053b

const eventSchema = new Schema({
  name: { type: String, unique: true },

  location: { type: String },

<<<<<<< HEAD
  time: { type: Number },
=======
    timestamps: true,
>>>>>>> 1bd686409ece69b208f530f922b1e162fd7d053b

  date: { type: Date },

<<<<<<< HEAD
  preparationTips: { type: String },

  attendees: [
    {
      type: Schema.Types.ObjectId,
      ref: "Parent",
    },
  ],
=======
    preparationTips: { type: String }



>>>>>>> 1bd686409ece69b208f530f922b1e162fd7d053b
});

const Event = model("event", eventSchema);

module.exports = Event;
