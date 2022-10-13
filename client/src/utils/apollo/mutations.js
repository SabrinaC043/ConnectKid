import { gql } from "@apollo/client";



export const CREATE_PARENT = gql`
mutation Mutation($firstName: String!, $lastName: String!, $email: String!, $password: String!, $age: Int!) {
    createParent(firstName: $firstName, lastName: $lastName, email: $email, password: $password, age: $age) {
      parent {
        firstName
        lastName
        email
      }
    }
  }
`
export default {CREATE_PARENT};
