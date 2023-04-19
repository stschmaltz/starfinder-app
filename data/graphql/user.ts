const userTypeDefs = /* GraphQL */ `
  type User {
    _id: String!
    email: String!
    characters: [Character!]!
  }

  type UserSignInResponse {
    user: User!
  }

  input UserSignInInput {
    email: String!
  }
`;

export { userTypeDefs };
