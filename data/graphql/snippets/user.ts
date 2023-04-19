import { fullCharacters } from './character';
import { CharacterObject } from '../../../types/character';

const fullUser = `{ _id, email, characters { ${fullCharacters} } }`;

export interface ApiUser {
  _id: string;
  email: string;
  characters: CharacterObject[];
}

export { fullUser };
