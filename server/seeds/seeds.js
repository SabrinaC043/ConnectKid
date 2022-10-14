const db = require('../config/connection');
const { Parent, Event } = require("../models");
const eventData = require('./eventSeeds.json');

db.once('open', async () => {

    await Event.deleteMany({});

    const event = await Event.insertMany(eventData);

    console.log("cook event added, done")
});