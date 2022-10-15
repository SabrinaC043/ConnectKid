import { gql } from "@apollo/client";

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
