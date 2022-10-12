const { Schema } = require("mongoose");

const childSchema = new Schema({
  name: { type: String, required: [true, "A child must have a name!"] },
  age: {
    type: Number,
    required: [true, "A child must have a specified age."],
    max: [2, "Age must have 2 digits maximum."],
  },
  interests: [{ type: String }],
});
module.exports = childSchema;
