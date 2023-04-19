import { injectable } from 'inversify';
import { CharacterProviderInterface } from './character.provider.interface';

@injectable()
class CharacterProvider implements CharacterProviderInterface {
  get(): void {
    console.log('get characters');
  }
}
export { CharacterProvider };
