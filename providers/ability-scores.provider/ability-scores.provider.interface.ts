import {
  AbilityScoreModifiersObject,
  AbilityScoresObject,
} from '../../types/character';

export interface AbilityScoresProviderInterface {
  getModifiers(abilityScores: AbilityScoresObject): AbilityScoreModifiersObject;
}
