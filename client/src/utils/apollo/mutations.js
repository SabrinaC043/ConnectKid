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
export  { CREATE_PARENT };
