import { ObjectId } from 'bson';

import { getDbClient } from '../data/database/mongodb';
import { CharacterObject } from '../types/character';

const collectionName = 'placeholder';

async function getCharactersForUser(
  userId: string
): Promise<CharacterObject[]> {
  const { db } = await getDbClient();

  const characters: CharacterObject[] = (await db
    .collection(collectionName)
    .find({ userId: new ObjectId(userId) })
    .toArray()) as CharacterObject[];

  console.log(characters);

  return characters;
}

export { getCharactersForUser };
