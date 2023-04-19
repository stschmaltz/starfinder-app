import { mutationResolver, mutationTypeDefs } from './mutation';
import { queryResolver, queryTypeDefs } from './query';
import { characterResolver, characterTypeDefs } from './character';
import { userTypeDefs } from './user';

const typeDefs = [
  mutationTypeDefs,
  queryTypeDefs,
  userTypeDefs,
  characterTypeDefs,
];
const resolvers = [queryResolver, characterResolver, mutationResolver];

export { typeDefs, resolvers };
