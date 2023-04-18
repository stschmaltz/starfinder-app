import { ObjectId } from 'bson';
import { DBPlaceholderObject } from '../types/placeholder';

import { getDbClient } from '../data/database/mongodb';

const collectionName = 'placeholder';

type PlaceholderDocument = {
  _id: ObjectId;
  userId: ObjectId;
};

async function getPlaceholdersForUser(
  userId: string
): Promise<DBPlaceholderObject[]> {
  const { db } = await getDbClient();

  const placeholders: PlaceholderDocument[] = (await db
    .collection(collectionName)
    .find({ userId: new ObjectId(userId) })
    .toArray()) as PlaceholderDocument[];

  console.log(placeholders);

  return [{ _id: new ObjectId(), userId: new ObjectId() }];
}

export { getPlaceholdersForUser };
