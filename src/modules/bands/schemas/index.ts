import { gql } from 'apollo-server';

export const Bands = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Query {
    bands(limit: Int): [Band]
    band(id: ID): Band
  }
`;
