import { getCharactersForUser } from '../../providers/character-database.provider';
import { UserObject } from '../../types/user';

const characterTypeDefs = /* GraphQL */ `
  type CharacterBaseDetails {
    name: String!
    level: Int!
    class: String!
    size: String!
    alignment: String!
    deity: String!
    speed: Int!
    initiative: Int!
    languages: [String!]!
    homeWorld: String!
    race: String!
  }

  type CharacterHealthStats {
    maxHp: Int!
    currentHp: Int!
    maxStamina: Int!
    currentStamina: Int!
    maxResolve: Int!
    currentResolve: Int!
  }

  type AbilityScoresObject {
    str: Int!
    dex: Int!
    con: Int!
    int: Int!
    wis: Int!
    cha: Int!
  }

  type Character {
    _id: String!
    userId: String!
    baseDetails: CharacterBaseDetails!
    healthStats: CharacterHealthStats!
    abilityScores: AbilityScoresObject!
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

export { characterTypeDefs, characterResolver };
