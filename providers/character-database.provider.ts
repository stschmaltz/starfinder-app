import { ObjectId } from 'bson';

import { getDbClient } from '../data/database/mongodb';
import { CharacterObject } from '../types/character';

const collectionName = 'character';

async function getCharactersForUser(
  userId: string
): Promise<Omit<CharacterObject, 'abilityScoreModifiers'>[]> {
  const { db } = await getDbClient();
  const characters: Omit<CharacterObject, 'abilityScoreModifiers'>[] = (await db
    .collection(collectionName)
    .find({ userId: userId.toString() })
    .toArray()) as Omit<CharacterObject, 'abilityScoreModifiers'>[];

  console.log(characters);

  return characters;
}

async function saveCharacter(
  character: CharacterObject
): Promise<Omit<CharacterObject, 'abilityScoreModifiers'>> {
  console.log('Saving character DB', character);

  const { db } = await getDbClient();

  const { abilityScoreModifiers: _, _id, ...rest } = character;

  const newCharacter = await db
    .collection(collectionName)
    .findOneAndUpdate(
      { _id: new ObjectId(_id) },
      { $set: { ...rest, _id: new ObjectId(_id) } },
      { upsert: true }
    );

  if (!newCharacter.value) {
    throw new Error('Failed to save character');
  }

  return {
    ...character,
  };
}

export { getCharactersForUser, saveCharacter };
