import { ObjectId } from 'bson';

import { getDbClient } from '../data/database/mongodb';
import { AbilityType, CharacterObject } from '../types/character';

const collectionName = 'placeholder';

const testCharacter: Omit<CharacterObject, 'abilityScoreModifiers'> = {
  _id: new ObjectId(),
  userId: new ObjectId(),
  baseDetails: {
    name: 'Korthax Ironcrest',
    level: 1,
    class: 'SOLARIAN',
    size: 'MEDIUM',
    alignment: 'LAWFUL_GOOD',
    deity: 'DESNA',
    speed: 30,
    initiative: 0,
    languages: ['Common', 'Vesk'],
    homeWorld: 'Vesk Prime',
    race: 'VESK',
  },
  healthStats: {
    maxHp: 13,
    currentHp: 13,
    maxStamina: 9,
    currentStamina: 9,
    maxResolve: 3,
    currentResolve: 3,
  },
  abilityScores: {
    str: 16,
    dex: 10,
    con: 14,
    cha: 14,
    int: 8,
    wis: 10,
  },
  armorClassDetails: {
    eacBonus: 1,
    kacBonus: 2,
    eacMisc: 1,
    kacMisc: 1,
  },
  savingThrowsDetails: {
    fortitudeBaseSave: 2,
    fortitudeMisc: 0,
    reflexBaseSave: 0,
    reflexMisc: 0,
    willBaseSave: 2,
    willMisc: 0,
  },
  attackBonusDetails: {
    baseAttackBonus: 1,
    meleeMisc: 1,
    rangedMisc: 0,
    thrownMisc: 0,
  },
  weapons: [
    {
      name: 'Solar Comet Flair',
      hit: 6,
      damage: '1d6+3',
      damageBonusStat: 'str',
      critical: undefined,
      range: undefined,
      type: 'Bludgeoning',
      special: undefined,
      ammoUsage: undefined,
      level: 1,
    },
    {
      name: 'Laser Pistol',
      hit: 1,
      damage: '1d4F',
      damageBonusStat: 'str',
      critical: '1d4Burn',
      range: 80,
      type: 'Small Arm',
      special: undefined,
      ammoUsage: '40(20)',
      level: 1,
    },
    {
      name: 'Shuriken',
      hit: 4,
      damage: '1d4P',
      damageBonusStat: 'str',
      critical: '1d4Bleed',
      range: 10,
      type: 'Special',
      special: 'Quick Reload',
      ammoUsage: '20',
      level: 1,
    },
  ],
  abilities: [
    {
      name: 'Low-light Viz',
      description: 'Can see in light up to 60ft',
      type: AbilityType.NEUTRAL,
    },
    {
      name: 'Solar Manifestation',
      description: 'Bight weapon light 20ft',
      type: AbilityType.NEUTRAL,
    },
    {
      name: 'Supernova',
      description: '1d6+1d6 fire to all (10ft)',
      type: AbilityType.PHOTON,
    },
    {
      name: 'Blackhole',
      description: 'Pull 20ft (fort save for 10).',
      type: AbilityType.GRAVITON,
    },
  ],
};

async function getCharactersForUser(
  userId: string
): Promise<Omit<CharacterObject, 'abilityScoreModifiers'>[]> {
  const { db } = await getDbClient();

  const characters: Omit<CharacterObject, 'abilityScoreModifiers'>[] = (await db
    .collection(collectionName)
    .find({ userId: new ObjectId(userId) })
    .toArray()) as Omit<CharacterObject, 'abilityScoreModifiers'>[];

  // TODO: use the db
  console.log(characters);

  return [testCharacter];
}

export { getCharactersForUser };
