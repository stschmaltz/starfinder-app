import { ObjectId } from 'bson';

export interface DBPlaceholderObject {
  _id: ObjectId;
  userId: ObjectId;
}

export interface PlaceholderObject {
  _id: ObjectId;
  userId: ObjectId;
}
