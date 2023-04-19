import { ObjectId } from 'bson';

export interface CharacterObject {
  _id: ObjectId;
  userId: ObjectId;
  baseDetails: CharacterDetails;
  healthStats: HealthStats;
}

interface CharacterDetails {
  name: string;
  level: number;
  class: 'SOLARIAN';
  size: 'MEDIUM';
  race: 'VESK';
  alignment: 'LAWFUL_GOOD';
  deity: 'DESNA';
  speed: number;
  initiative: number;
  languages: string[];
  homeWorld: string;
}

interface HealthStats {
  maxHp: number;
  currentHp: number;
  maxStamina: number;
  currentStamina: number;
  maxResolve: number;
  currentResolve: number;
}
