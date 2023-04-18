import { mutationResolver, mutationTypeDefs } from './mutation';
import { queryResolver, queryTypeDefs } from './query';
import { placeholderResolver, placeholderTypeDefs } from './placeholder';
import { userTypeDefs } from './user';

const typeDefs = [
  mutationTypeDefs,
  queryTypeDefs,
  userTypeDefs,
  placeholderTypeDefs,
];
const resolvers = [queryResolver, placeholderResolver, mutationResolver];

export { typeDefs, resolvers };
