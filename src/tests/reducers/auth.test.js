import authReducer from "../../reducers/auth";

test("should set uid for login", () => {
  const action = {
    type: "LOGIN",
    uid: "123abc",
  };
  const state = authReducer({}, action);
  expect(state.uid).toBe(action.uid);
});

test("should clear uid for logout", () => {
  const state = authReducer({ uid: "anything" }, { type: "LOGOUT" });
  expect(state).toEqual({});
});
