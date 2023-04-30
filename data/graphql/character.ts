import { appContainer } from '../../container/inversify.config';
import { TYPES } from '../../container/types';
import { AbilityScoresProviderInterface } from '../../providers/ability-scores.provider/ability-scores.provider.interface';
import { getCharactersForUser } from '../../providers/character-database.provider';
import {
  AbilityScoreModifiersObject,
  CharacterObject,
} from '../../types/character';
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

  type AbilityScoreModifiersObject {
    strMod: Int!
    dexMod: Int!
    conMod: Int!
    intMod: Int!
    wisMod: Int!
    chaMod: Int!
  }

  type ArmorClassDetailsObject {
    eacBonus: Int!
    kacBonus: Int!
    eacMisc: Int!
    kacMisc: Int!
  }

  type Character {
    _id: String!
    userId: String!
    baseDetails: CharacterBaseDetails!
    healthStats: CharacterHealthStats!
    abilityScores: AbilityScoresObject!
    abilityScoreModifiers: AbilityScoreModifiersObject!
    armorClassDetails: ArmorClassDetailsObject!
  }
`;

const characterResolver = {
  User: {
    async characters(parent: Omit<UserObject, '_id'> & { _id: string }) {
      try {
        const characters = await getCharactersForUser(parent._id);
        console.log('characters', characters);

        return characters;
      } catch (error) {
        console.log(error);
        return [];
      }
    },
  },

  Character: {
    async abilityScoreModifiers(
      parent: Omit<CharacterObject, 'abilityScoreModifiers'>
    ): Promise<AbilityScoreModifiersObject> {
      try {
        const abilityScoresProvider =
          appContainer.get<AbilityScoresProviderInterface>(
            TYPES.AbilityScoresProvider
          );

        const abilityScoreModifiers = await abilityScoresProvider.getModifiers(
          parent.abilityScores
        );

        return abilityScoreModifiers;
      } catch (error) {
        console.log(error);
        return {
          chaMod: 0,
          conMod: 0,
          dexMod: 0,
          intMod: 0,
          strMod: 0,
          wisMod: 0,
        };
      }
    },
  },
};

export { characterTypeDefs, characterResolver };
