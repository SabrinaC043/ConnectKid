const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Parent {
    firstName: String
    lastName: String
    email: String
    password: String
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

  type Query {
    parents: [Parent]!
    singleParent(email: String!): Parent
  }

  type Auth {
    token: ID
    parent: Parent
  }

  type Mutation {

    createParent(firstName: String!, lastName: String!, email: String!, password: String!, age: Int!, child: String): Auth

    logIn(email: String!, password: String!): Auth
  }
`;
module.exports = typeDefs;

// name: { type: String, required: [true, "A child must have a name!"] },
// age: {
//   type: Number,
//   required: [true, "A child must have a specified age."],
//   max: [2, "Age must have 2 digits maximum."],
// },
// interests: [{ type: String }],
// gender: { type: String }
// });
