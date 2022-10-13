// const { gql } = require('apollo-server-express');

// const typeDefs = gql`
// #User login will track information about specific user and associated child(ren)

// type User {
// _id: ID!
// name: String!
// password: String!
// passwordLength: INT!
// email: String!
// }

// type Parent {
// _id:ID!
// name:String!
// age: INT
// gender: String
// extroversionScale:INT
// childCount: [INT]
// }


// type Child {

//     _id: ID! 
//     name: String! 
//     childAge: INT! 
//     gender: String!
    
//     }

// type Event {
// name: String!
// location: [String]
// time:[INT]
// date: [String]
// preparationTips: [String] 
// }

// type Auth {
//     token:ID! 
//     user:(User:ID!): User
// }

// type Query {
//     user: [user]!
//     user(userId:Id!):User
// }


// type Mutation {
//     add(UserId: ID!, name: String!, password: String!,passwordLength: INT!,email: String!):Auth login (email:String!. password!):Auth

//     addChild( id: ID!, childCount: [INT],name: String! , childAge: INT!, gender: String!):Child

//     removeUser(User:ID!):User
//     removeChild(id:ID!, name:String):Child
// }


// `;
// module.exports = typeDefs;