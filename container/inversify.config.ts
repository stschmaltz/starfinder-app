import 'reflect-metadata';

import { Container } from 'inversify';
import { TYPES } from './types';
import { CharacterProvider } from '../providers/character.provider/character.provider';
import { CharacterProviderInterface } from '../providers/character.provider/character.provider.interface';

const appContainer = new Container();

appContainer
  .bind<CharacterProviderInterface>(TYPES.CharacterProvider)
  .toConstantValue(new CharacterProvider());
export { appContainer };
