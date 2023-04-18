import { getPlaceholdersForUser } from '../../providers/placeholder-database.provider';
import { UserObject } from '../../types/user';

const placeholderTypeDefs = /* GraphQL */ `
  type Placeholder {
    _id: String!
    userId: String!
  }
`;
const placeholderResolver = {
  User: {
    async placeholders(parent: Omit<UserObject, '_id'> & { _id: string }) {
      try {
        console.log('placeHolders');
        const placeholders = await getPlaceholdersForUser(parent._id);
        return placeholders;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
};

export { placeholderTypeDefs, placeholderResolver };
