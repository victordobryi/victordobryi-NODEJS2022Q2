import { gql } from 'apollo-server';

export const Users = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    password: String
    email: String!
  }

  type Query {
    users(limit: Int): [User]
    user(id: ID): User
    jwt(email: String!, password: String!): JWT
  }

  type JWT {
    jwt: String!
  }
`;
