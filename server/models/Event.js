const { Schema, model } = require("mongoose");
const childSchema = require("./childSchema");

const eventSchema = new Schema({
    name: { type: String },

    location: { type: String },

    time: { type: Number },

    date: { type: Date },

    preparationTips: { type: String },

    attendees: [{
        type: Schema.Types.ObjectId,
        ref: childSchema}]
});



const Event = model('event', eventSchema)



module.exports = Event;

