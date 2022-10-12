const { Schema, model } = require("mongoose");

const eventSchema = new Schema({
    name: { type: String },

    location: { type: String },

    time: { type: INT },

    date: { type: Date },

    preparationTips: { type: String }




});



const Event = model('event', eventSchema)



module.exports = Event;

