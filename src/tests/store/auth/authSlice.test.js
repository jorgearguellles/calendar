import { describe, expect, test } from "vitest";
import { authSlice, onLogin, onLogout } from "../../../store/auth/authSlice";
import {
  initialState,
  authenticatedState,
  notAuthenticatedState,
} from "../../fixtures/authState";
import { testUserCredentials } from "../../fixtures/testUser";

describe("authSlice", () => {
  test("Should return initial state", () => {
    expect(authSlice.getInitialState()).toEqual(initialState);
  });

  test("Should login", () => {
    let state = authSlice.getInitialState();
    state = authSlice.reducer(state, onLogin(testUserCredentials));
    expect(state).toEqual(authenticatedState);
  });

  test("Should logout", () => {
    let state = authSlice.getInitialState();
    state = authSlice.reducer(state, onLogout());
    expect(state).toEqual(notAuthenticatedState);
  });
});
