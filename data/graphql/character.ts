import { getCharactersForUser } from '../../providers/character-database.provider';
import { UserObject } from '../../types/user';

const placeholderTypeDefs = /* GraphQL */ `
  type Character {
    _id: String!
    userId: String!
  }
`;
const characterResolver = {
  User: {
    async characters(parent: Omit<UserObject, '_id'> & { _id: string }) {
      try {
        console.log('characters');
        const characters = await getCharactersForUser(parent._id);

        return characters;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },
};

export { placeholderTypeDefs, characterResolver };
