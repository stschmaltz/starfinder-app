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
    expEarned: Int!
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

  type SavingThrowsDetailsObject {
    fortitudeBaseSave: Int!
    fortitudeMisc: Int!
    reflexBaseSave: Int!
    reflexMisc: Int!
    willBaseSave: Int!
    willMisc: Int!
  }

  type AttackBonusDetailsObject {
    baseAttackBonus: Int!
    meleeMisc: Int!
    rangedMisc: Int!
    thrownMisc: Int!
  }

  type WeaponObject {
    name: String!
    level: Int!
    ammoUsage: String
    hit: Int!
    damage: String!
    critical: String
    range: String
    type: String!
    special: String
    damageBonusStat: String
  }

  type CharacterAbilities {
    description: String!
    name: String!
    type: String!
    url: String
  }

  type CharacterSkills {
    name: String!
    abilityScoreModifiersObject: String!
    ranks: Int!
    miscBonus: Int!
    isProficient: Boolean!
  }

  type CarryObject {
    currentCarry: Float!
    maxCarry: Float!
    credits: Float!
  }

  type CharacterResources {
    name: String!
    url: String!
    description: String!
  }

  type Character {
    _id: String!
    userId: String!
    baseDetails: CharacterBaseDetails!
    healthStats: CharacterHealthStats!
    abilities: [CharacterAbilities!]!
    abilityScores: AbilityScoresObject!
    abilityScoreModifiers: AbilityScoreModifiersObject!
    armorClassDetails: ArmorClassDetailsObject!
    savingThrowsDetails: SavingThrowsDetailsObject!
    attackBonusDetails: AttackBonusDetailsObject!
    weapons: [WeaponObject!]!
    skills: [CharacterSkills!]!
    languages: [String!]!
    carry: CarryObject!
    resources: [CharacterResources!]!
    notes: [String!]!
  }
`;

const characterResolver = {
  User: {
    async characters(parent: Omit<UserObject, '_id'> & { _id: string }) {
      try {
        const characters = await getCharactersForUser(parent._id);

        // TODO: add resources to database
        return characters.map((character) => ({
          ...character,
          resources: [
            {
              name: 'Solarian Modes',
              url: '/images/solarian-modes.png',
              description:
                'The two different solarian attunement modes. Photon and Graviton.',
            },
            {
              name: 'Disproportionate Revelations',
              url: '/images/disproportionate-revelations.png',
              description:
                'Keeping your revelations in balance. Can have 1 more revelation of a lower level than the other.',
            },
            {
              name: 'Vesk Physical Description',
              url: '/images/vesk-physical-description.png',
              description:
                '7ft tall, thick with muscle, tough/scaly skin. Alpha Lizards.',
            },
            {
              name: 'Vesk Cover',
              url: '/images/vesk-cover.png',
              description:
                '+2 Str, +2 Con, -2 Int. Medium. 30ft. low-light vision. When wearing armor +1 bonus to AC. Penalty to armor check on heavy armor reduced by 1.',
            },
          ],
        }));
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
