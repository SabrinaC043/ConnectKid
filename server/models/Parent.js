const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const childSchema = require("./childSchema");

const parentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  age: {
    type: Number,
    required: [true, "A parent must have a specified age."],
    max: [2, "Age must have 2 digits maximum."],
  },
  child: [childSchema],
});

parentSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

parentSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Parent = model("parent", parentSchema);

module.exports = Parent;
