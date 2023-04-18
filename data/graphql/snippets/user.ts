import { fullPlaceholder } from './placeholder';
import { PlaceholderObject } from '../../../types/placeholder';

const fullUser = `{ _id, email, placeholders { ${fullPlaceholder} } }`;

export interface ApiUser {
  _id: string;
  email: string;
  placeholders: PlaceholderObject[];
}

export { fullUser };
