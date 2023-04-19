import { mutationResolver, mutationTypeDefs } from './mutation';
import { queryResolver, queryTypeDefs } from './query';
import { characterResolver, placeholderTypeDefs } from './character';
import { userTypeDefs } from './user';

const typeDefs = [
  mutationTypeDefs,
  queryTypeDefs,
  userTypeDefs,
  placeholderTypeDefs,
];
const resolvers = [queryResolver, characterResolver, mutationResolver];

export { typeDefs, resolvers };
