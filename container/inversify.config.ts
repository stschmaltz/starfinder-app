import 'reflect-metadata';

import { Container } from 'inversify';
import { TYPES } from './types';
import { CharacterProvider } from '../providers/character.provider/character.provider';
import { CharacterProviderInterface } from '../providers/character.provider/character.provider.interface';
import { AbilityScoresProviderInterface } from '../providers/ability-scores.provider/ability-scores.provider.interface';
import { AbilityScoresProvider } from '../providers/ability-scores.provider/ability-scores.provider';

const appContainer = new Container();

appContainer
  .bind<CharacterProviderInterface>(TYPES.CharacterProvider)
  .toConstantValue(new CharacterProvider());

appContainer
  .bind<AbilityScoresProviderInterface>(TYPES.AbilityScoresProvider)
  .toConstantValue(new AbilityScoresProvider());
export { appContainer };
