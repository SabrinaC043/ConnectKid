import { gql } from "@apollo/client"; 



export const ALL_EVENTS = gql`
query Events {
  events {
    name
    location
    time
    preparationTips
    isFeatured  
  }
}
`

//export { ALL_EVENTS }