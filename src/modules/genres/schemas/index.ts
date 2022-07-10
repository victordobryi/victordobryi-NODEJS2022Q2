import { gql } from 'apollo-server';

export const Genres = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    genres(limit: Int): [Genre]
    genre(id: ID): Genre
  }
`;
