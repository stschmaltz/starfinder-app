import { ObjectId } from 'bson';

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

export interface AbilityScoresObject {
  str: number;
  dex: number;
  con: number;
  int: number;
  wis: number;
  cha: number;
}

export interface AbilityScoreModifiersObject {
  strMod: number;
  dexMod: number;
  conMod: number;
  intMod: number;
  wisMod: number;
  chaMod: number;
}

export interface ArmorClassDetailsObject {
  eacBonus: number;
  kacBonus: number;
  eacMisc: number;
  kacMisc: number;
}

export interface SavingThrowsDetailsObject {
  fortitudeBaseSave: number;
  fortitudeMisc: number;
  reflexBaseSave: number;
  reflexMisc: number;
  willBaseSave: number;
  willMisc: number;
}

export interface AttackBonusDetailsObject {
  baseAttackBonus: number;
  meleeMisc: number;
  rangedMisc: number;
  thrownMisc: number;
}

export interface WeaponObject {
  name: string;
  level: number;
  type: string;
  hit: number;
  damage: string;
  damageBonusStat?: keyof AbilityScoresObject;
  ammoUsage?: string;
  critical?: string;
  range?: number;
  special?: string;
}

export enum AbilityType {
  GRAVITON = 'GRAVITON',
  PHOTON = 'PHOTON',
  NEUTRAL = 'NEUTRAL',
}

export interface AbilityObject {
  description: string;
  name: string;
  type: AbilityType;
}

export interface SkillObject {
  name: string;
  ranks: number;
  classBonus: number;
  miscBonus: number;
  abilityScoreModifiersObject: keyof AbilityScoreModifiersObject;
  isProficient: boolean;
}

export interface CharacterObject {
  _id: ObjectId;
  userId: ObjectId;
  baseDetails: BaseCharacterDetails;
  healthStats: HealthStats;
  abilities: AbilityObject[];
  abilityScores: AbilityScoresObject;
  abilityScoreModifiers: AbilityScoreModifiersObject;
  armorClassDetails: ArmorClassDetailsObject;
  savingThrowsDetails: SavingThrowsDetailsObject;
  attackBonusDetails: AttackBonusDetailsObject;
  weapons: WeaponObject[];
  skills: SkillObject[];
}
