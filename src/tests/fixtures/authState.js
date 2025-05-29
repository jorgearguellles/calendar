import { testUserCredentials } from "./testUser";

const initialState = {
  status: "checking",
  user: {},
  errorMessage: undefined,
};

const authenticatedState = {
  status: "authenticated",
  user: testUserCredentials,
  errorMessage: undefined,
};

const notAuthenticatedState = {
  status: "not-authenticated",
  user: {},
  errorMessage: undefined,
};

export { initialState, authenticatedState, notAuthenticatedState };
