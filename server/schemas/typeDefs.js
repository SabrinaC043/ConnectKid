const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Parent {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    age: Int
    child: [Child]
  }

  type Child {
    firstName: String!
    lastName: String!
    age: Int!
    interests: [String]
    gender: String
  }
  type Event {
    _id: ID
    name: String!
    location: String!
    time: Int
    date: String
    isFeatured: Boolean
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
      isFeatured: Boolean
      attendees: [ID]
    ): Event

    addParentToEvent(parentId: ID!, eventId: ID!): Event

    logIn(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;
