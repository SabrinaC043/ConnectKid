import { gql } from "@apollo/client";



export const ALL_EVENTS = gql`
query Events {
  events {
    _id
    name
    location
    time
    date
    preparationTips
    isFeatured
    eventDetails
    attendees {
      firstName
      lastName
    }
  }
}
`
