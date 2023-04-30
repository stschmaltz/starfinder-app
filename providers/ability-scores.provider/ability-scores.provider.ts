import { injectable } from 'inversify';
import { AbilityScoresProviderInterface } from './ability-scores.provider.interface';
import {
  AbilityScoreModifiersObject,
  AbilityScoresObject,
} from '../../types/character';

@injectable()
class AbilityScoresProvider implements AbilityScoresProviderInterface {
  abilityScoreToModifierMap: Record<number, number> = {
    1: -5,
    2: -4,
    3: -4,
    4: -3,
    5: -3,
    6: -2,
    7: -2,
    8: -1,
    9: -1,
    10: 0,
    11: 0,
    12: 1,
    13: 1,
    14: 2,
    15: 2,
    16: 3,
    17: 3,
    18: 4,
    19: 4,
    20: 5,
    21: 5,
    22: 6,
    23: 6,
    24: 7,
    25: 7,
    26: 8,
  };

  getModifiers(
    abilityScores: AbilityScoresObject
  ): AbilityScoreModifiersObject {
    console.log('abilityScores', abilityScores);

    return {
      chaMod: this.abilityScoreToModifierMap[abilityScores.cha] ?? 0,
      conMod: this.abilityScoreToModifierMap[abilityScores.con] ?? 0,
      dexMod: this.abilityScoreToModifierMap[abilityScores.dex] ?? 0,
      intMod: this.abilityScoreToModifierMap[abilityScores.int] ?? 0,
      strMod: this.abilityScoreToModifierMap[abilityScores.str] ?? 0,
      wisMod: this.abilityScoreToModifierMap[abilityScores.wis] ?? 0,
    };
  }
}
export { AbilityScoresProvider };
