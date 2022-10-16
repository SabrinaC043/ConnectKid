import { gql } from "@apollo/client";
// For all Events
export const ALL_EVENTS = gql`
  query allEvents {
    events {
      name
      location
      time
      date
      preparationTips
      isFeatured
    }
  }
`;
// For home page first card
export const WEEKLY = gql`
  query allWeeklies {
    weekly {
      tableTopics
      quoteDay
    }
  }
`;
