const { gql } = require("apollo-server");

const TypeDefs = gql`
#

type User {
_id: ID!
name: String!
password: String!
passwordLength: INT!
email: String!
}

type Parent {
_id:ID!
name:String!
age: INT
gender: String
}

type Extroversion {
   _id:ID!
    scale:[INT]
    rating: [STRING]
}


type Child {

    _id: ID! 
    childCount: [INT]
    name: String! 
    childAge: INT! 
    gender: String!
    
    }

    
type Cook {
    name: String!
    link: String!
    time: [INT]
    preparation: [String]
}

type Event {
name: String!
location: [String]
time:[INT]
date: [String]
preparationTips: [String] 
}

type Auth {
    token:ID! 
    user:(User:ID!): User
}

type Query {
    User: [User]!
    User(user:ID):User
}


type Mutation {
    add(Userid: ID!, name: String!, password: String!,passwordLength: INT!,email: String!):Auth login (email:String!. password!):Auth

    addChild( id: ID!, childCount: [INT],name: String! , childAge: INT!, gender: String!):Child

    removeUser(User:ID!):User
    removeChild(id:ID!, name:String):Child
}


`;
module.exports = typeDefs;
