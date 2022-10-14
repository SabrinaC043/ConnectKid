import { gql } from "@apollo/client";



const ALL_EVENTS = gql`
query Events {
  events {
    name
    location
    time
    date
    preparationTips
    attendees
    isFeatured
  }
}
`

export { ALL_EVENTS }