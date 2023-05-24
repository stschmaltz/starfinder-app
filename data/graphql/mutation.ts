import { saveCharacter } from '../../providers/character-database.provider';
import { handleUserSignIn } from '../../providers/user.provider';
import { CharacterObject } from '../../types/character';
import { UserObject } from '../../types/user';

const mutationTypeDefs = /* GraphQL */ `
  type SaveCharacterResponse {
    character: Character
  }

  input CharacterBaseDetailsInput {
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

  input CharacterHealthStatsInput {
    maxHp: Int!
    currentHp: Int!
    maxStamina: Int!
    currentStamina: Int!
    maxResolve: Int!
    currentResolve: Int!
  }

  input AbilityScoresObjectInput {
    str: Int!
    dex: Int!
    con: Int!
    int: Int!
    wis: Int!
    cha: Int!
  }

  input AbilityScoreModifiersObjectInput {
    strMod: Int!
    dexMod: Int!
    conMod: Int!
    intMod: Int!
    wisMod: Int!
    chaMod: Int!
  }

  input ArmorClassDetailsObjectInput {
    eacBonus: Int!
    kacBonus: Int!
    eacMisc: Int!
    kacMisc: Int!
  }

  input SavingThrowsDetailsObjectInput {
    fortitudeBaseSave: Int!
    fortitudeMisc: Int!
    reflexBaseSave: Int!
    reflexMisc: Int!
    willBaseSave: Int!
    willMisc: Int!
  }

  input AttackBonusDetailsObjectInput {
    baseAttackBonus: Int!
    meleeMisc: Int!
    rangedMisc: Int!
    thrownMisc: Int!
  }

  input WeaponObjectInput {
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

  input CharacterAbilitiesInput {
    description: String!
    name: String!
    type: String!
    url: String
  }

  input CharacterSkillsInput {
    name: String!
    abilityScoreModifiersObject: String!
    ranks: Int!
    miscBonus: Int!
    isProficient: Boolean!
  }

  input CarryInput {
    currentCarry: Float!
    maxCarry: Float!
    credits: Float!
  }

  input CharacterResourcesInput {
    name: String!
    url: String!
    description: String!
  }

  input CharacterInput {
    _id: String!
    userId: String!
    baseDetails: CharacterBaseDetailsInput!
    healthStats: CharacterHealthStatsInput!
    abilities: [CharacterAbilitiesInput!]!
    abilityScores: AbilityScoresObjectInput!
    armorClassDetails: ArmorClassDetailsObjectInput!
    savingThrowsDetails: SavingThrowsDetailsObjectInput!
    attackBonusDetails: AttackBonusDetailsObjectInput!
    weapons: [WeaponObjectInput!]!
    skills: [CharacterSkillsInput!]!
    languages: [String!]!
    carry: CarryInput!
    resources: [CharacterResourcesInput!]!
  }

  type Mutation {
    userSignIn(input: UserSignInInput!): UserSignInResponse
    saveCharacter(input: CharacterInput!): SaveCharacterResponse
  }
`;

export interface UserSignInInput {
  input: { email: string };
}

interface SaveCharacterArgs {
  input: CharacterObject;
}

const mutationResolver = {
  Mutation: {
    async userSignIn(
      _: never,
      args: UserSignInInput
    ): Promise<{ user: UserObject }> {
      try {
        const {
          input: { email },
        } = args;
        const user = await handleUserSignIn(email);

        return { user };
      } catch (error) {
        console.log(error);

        throw new Error('User not found');
      }
    },

    async saveCharacter(
      _: never,
      args: SaveCharacterArgs
    ): Promise<{ character: Omit<CharacterObject, 'abilityScoreModifiers'> }> {
      try {
        const { input: character } = args;

        const newCharacter = await saveCharacter(character);

        return { character: newCharacter };
      } catch (error) {
        console.log(error);

        throw new Error('Error saving character');
      }
    },
  },
};

export { mutationResolver, mutationTypeDefs };
