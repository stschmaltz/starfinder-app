const userTypeDefs = /* GraphQL */ `
  type User {
    _id: String!
    email: String!
    placeholders: [Placeholder!]!
  }

  type UserSignInResponse {
    user: User!
  }

  input UserSignInInput {
    email: String!
  }
`;

export { userTypeDefs };
