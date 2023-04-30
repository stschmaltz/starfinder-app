import { ObjectId } from 'bson';

import { getDbClient } from '../data/database/mongodb';
import { CharacterObject } from '../types/character';

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
