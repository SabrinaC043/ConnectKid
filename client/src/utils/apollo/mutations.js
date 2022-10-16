import { gql } from "@apollo/client";



const CREATE_PARENT = gql`
mutation CreateParent($firstName: String!, $lastName: String!, $email: String!, $password: String!, $age: Int!) {
  createParent(firstName: $firstName, lastName: $lastName, email: $email, password: $password, age: $age) {
  parent {
    firstName
    lastName
    email
  }
    token
  }
}
`

const ADD_PARENT_TO_EVENT = gql`
mutation Mutation {
  addParentToEvent {
    name
    location
    attendees {
      _id

    }
  }
}
`

export  { CREATE_PARENT, ADD_PARENT_TO_EVENT };
