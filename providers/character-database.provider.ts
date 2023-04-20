import { ObjectId } from 'bson';

import { getDbClient } from '../data/database/mongodb';
import { CharacterObject } from '../types/character';

const collectionName = 'placeholder';

const testCharacter: CharacterObject = {
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
};

async function getCharactersForUser(
  userId: string
): Promise<CharacterObject[]> {
  const { db } = await getDbClient();

  const characters: CharacterObject[] = (await db
    .collection(collectionName)
    .find({ userId: new ObjectId(userId) })
    .toArray()) as CharacterObject[];

  // TODO: use the db
  console.log(characters);

  return [testCharacter];
}

export { getCharactersForUser };
