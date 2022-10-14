const db = require('../config/connection');
const { Parent, Event } = require("../models");

db.once('open', async () => {
    const event = await Event.insertMany(eventData);


    for (newEvent of events) {
        const cookEvents = event[Math.floor(Math.random() * event.length)];
        cookEvents.Event.push(newEvent._id);
        await cookEvents.save();
    }

    console.log("cook event added, done")
    process.exit(0);
});