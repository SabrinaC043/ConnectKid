const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Parent {
    firstName: String
    lastName: String
    age: Int
    email: String
    child: [Child]
  }

  type Child {
    firstName: String
    lastName: String
    age: Int
    interests: [String]
    gender: String
  }
  type Event {
    name: String!
    location: String!
    time: Int
    date: String
    preparationTips: String
    attendees: [ID]
  }
  type Query {
    parents: [Parent]!
    singleParent(email: String!): Parent
    events: [Event]!
    singleEvent(name: String!): Event
  }

  type Auth {
    token: ID
    parent: Parent
  }

  type Mutation {
    createParent(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
      age: Int!
      child: String
    ): Auth

    createEvent(
      name: String!
      location: String!
      time: Int!
      date: String!
      preparationTips: String
      attendees: [ID]!
    ): Event

    logIn(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;

