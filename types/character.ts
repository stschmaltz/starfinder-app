import { ObjectId } from 'bson';

export interface CharacterObject {
  _id: ObjectId;
  userId: ObjectId;
  baseDetails: BaseCharacterDetails;
  healthStats: HealthStats;
}

export interface BaseCharacterDetails {
  name: string;
  level: number;
  class: 'SOLARIAN'; // TODO: make enum
  size: 'SMALL' | 'MEDIUM' | 'LARGE'; // TODO: make enum
  race: 'VESK'; // TODO: make enum
  alignment: 'LAWFUL_GOOD'; // TODO: make enum
  deity: 'DESNA'; // TODO: make enum
  speed: number;
  initiative: number;
  languages: string[]; // TODO: make enum
  homeWorld: string;
}

export interface HealthStats {
  maxHp: number;
  currentHp: number;
  maxStamina: number;
  currentStamina: number;
  maxResolve: number;
  currentResolve: number;
}
