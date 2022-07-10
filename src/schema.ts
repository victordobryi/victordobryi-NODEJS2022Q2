import { Album } from './modules/album/schemas';
import { Artists } from './modules/artists/schemas';
import { Bands } from './modules/bands/schemas';
import { Favourites } from './modules/favourites/schemas';
import { Genres } from './modules/genres/schemas';
import { Member } from './modules/member/schemas';
import { Tracks } from './modules/tracks/schemas';
import { Users } from './modules/users/schemas';

export const typeDefs = [Album, Artists, Bands, Favourites, Genres, Member, Tracks, Users];
