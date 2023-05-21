import { injectable } from 'inversify';
import { AbilityScoresProviderInterface } from './ability-scores.provider.interface';
import {
  AbilityScoreModifiersObject,
  AbilityScoresObject,
} from '../../types/character';

@injectable()
class AbilityScoresProvider implements AbilityScoresProviderInterface {
  getModifiers(
    abilityScores: AbilityScoresObject
  ): AbilityScoreModifiersObject {
    return {
      strMod: Math.floor((abilityScores.str - 10) / 2) || 0,
      dexMod: Math.floor((abilityScores.dex - 10) / 2) || 0,
      conMod: Math.floor((abilityScores.con - 10) / 2) || 0,
      intMod: Math.floor((abilityScores.int - 10) / 2) || 0,
      wisMod: Math.floor((abilityScores.wis - 10) / 2) || 0,
      chaMod: Math.floor((abilityScores.cha - 10) / 2) || 0,
    };
  }
}
export { AbilityScoresProvider };
