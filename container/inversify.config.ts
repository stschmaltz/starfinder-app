import 'reflect-metadata';

import { Container } from 'inversify';
import { TYPES } from './types';
import { PlaceholderProvider } from '../providers/placeholder.provider/placeholder.provider';
import { PlaceholderProviderInterface } from '../providers/placeholder.provider/placeholder.provider.interface';

const appContainer = new Container();

appContainer
  .bind<PlaceholderProviderInterface>(TYPES.PlaceholderProvider)
  .toConstantValue(new PlaceholderProvider());
export { appContainer };
