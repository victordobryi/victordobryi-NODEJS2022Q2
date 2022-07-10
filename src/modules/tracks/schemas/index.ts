import { gql } from 'apollo-server';

export const Tracks = gql`
  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks(limit: Int): [Track]
    track(id: ID): Track
  }
`;
