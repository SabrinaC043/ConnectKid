const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Parent {
    name: String
  }

  type Query {
    parents: [Parent]!
  }
`;
module.exports = typeDefs;
