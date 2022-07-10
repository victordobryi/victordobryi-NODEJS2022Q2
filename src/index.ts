import { ApolloServer } from 'apollo-server';
import { typeDefs } from './schema';
import { UserAPI } from './modules/users/services';
import * as dotenv from 'dotenv';
dotenv.config();

const {
  GENRES_URL,
  ARTISTS_URL,
  BANDS_URL,
  USERS_URL,
  FAVOURITES_URL,
  ALBUMS_URL,
  TRACKS_URL,
  MONGO_URL,
  PORT,
} = process.env;
const APOLLO_PORT = PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  csrfPrevention: true,
  cache: 'bounded',

  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return token;
  },
});

server.listen({ port: APOLLO_PORT }).then(() => {
  console.log(`Server is running! Listening on port ${APOLLO_PORT}`);
});
