const { Parent, Event } = require("../models");

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
      return await Event.find({}).populate("attendees");
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
      return { newParent, token };
    },
    createEvent: async (
      parent,
      { name, location, time, date, preparationTips, attendees }
    ) => {
      return await Event.create({
        name,
        location,
        time,
        date,
        preparationTips,
        attendees,
      });
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

      return { currentParent, token };
    },
  },
};
module.exports = resolvers;
