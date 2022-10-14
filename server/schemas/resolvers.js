const { Parent, Event, Child } = require("../models");

const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");
const { pathToArray } = require("graphql/jsutils/Path");
const { JsonWebTokenError } = require("jsonwebtoken");
const resolvers = {
  Query: {
    parents: async () => {
      return await Parent.find({});
    },

    singleParent: async (parent, { email }) => {
      return await Parent.findOne({ email });
    },
    events: async () => {
      return await Event.find({});
      // .populate("attendees");
    },
    singleEvent: async (parent, { name }) => {
      return await Event.findOne({ name });
    },
  },

  Mutation: {
    createParent: async (
      parent,
      { firstName, lastName, email, password, age, child }
    ) => {
      const newParent = await Parent.create({
        firstName,
        lastName,
        email,
        password,
        age,
        child,
      });

      const token = signToken(email);
      return { parent: newParent, token };
    },
    createChild: async (
      parent,
      { firstName, lastName, age, interests, gender, parentId },
      context
    ) => {
      // if (context.user) {
      const child = new Child({
        firstName,
        lastName,
        age,
        interests,
        gender,
      });

      await Parent.findByIdAndUpdate(parentId, {
        $addToSet: { child: child },
      });

      return child;

      // throw new AuthenticationError("Not logged in");
    },

    createEvent: async (
      parent,
      { name, location, time, date, isFeatured, preparationTips, attendees }
    ) => {
      return await Event.create({
        name,
        location,
        time,
        date,
        isFeatured,
        preparationTips,
        attendees,
      });
    },
    addParentToEvent: async (parent, { parentId, eventId }) => {
      return await Event.findOneAndUpdate(
        { _id: eventId },
        { $addToSet: { attendees: parentId } },
        { new: true, runValidators: true }
      );
    },

    logIn: async (parent, { email, password }) => {
      const currentParent = await Parent.findOne({ email });

      if (!currentParent) {
        throw new AuthenticationError(
          "No Parent has been found with that email"
        );
      }

      if (!currentParent.isCorrectPassword(password)) {
        throw new AuthenticationError("Incorrect email or password");
      }

      const token = signToken({ email });

      return { parent: currentParent, token };
    },
  },
};
module.exports = resolvers;
