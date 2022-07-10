import { gql } from 'apollo-server';

export const Member = gql`
  type Member {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Query {
    members(limit: Int): [Member]
    member(id: ID): Member
  }
`;
