import { handleUserSignIn } from '../../providers/user.provider';
import { UserObject } from '../../types/user';

const mutationTypeDefs = /* GraphQL */ `
  type Mutation {
    userSignIn(input: UserSignInInput!): UserSignInResponse
  }
`;

export interface UserSignInInput {
  input: { email: string };
}

const mutationResolver = {
  Mutation: {
    async userSignIn(
      _: never,
      args: UserSignInInput
    ): Promise<{ user: UserObject }> {
      try {
        const {
          input: { email },
        } = args;
        const user = await handleUserSignIn(email);

        return { user };
      } catch (error) {
        console.log(error);
        throw new Error('User not found');
      }
    },
  },
};

export { mutationResolver, mutationTypeDefs };
