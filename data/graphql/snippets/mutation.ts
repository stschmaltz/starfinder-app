import { fullCharacters } from './character';
import { ApiUser, fullUser } from './user';

const signInUserMutationGraphQL = `mutation userSignIn($input: UserSignInInput!) {
  userSignIn(input: $input) {
    user ${fullUser}
  }
}`;

const saveCharacterMutationGraphQL = `mutation saveCharacter($input: CharacterInput!) {
  saveCharacter(input: $input) {
    character {
      ${fullCharacters}
    }
  }
}`;

export interface SignInUserMutationResponse {
  userSignIn: {
    user: ApiUser;
  };
}

export { signInUserMutationGraphQL, saveCharacterMutationGraphQL };
