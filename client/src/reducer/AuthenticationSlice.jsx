import { createSlice } from "@reduxjs/toolkit";

export const AuthenticationSlice = createSlice({
  name: "auth",
  initialState: {
    authentication: false,
  },
  reducers: {
    setAuthentication: (state, action) => {
      state.authentication = action.payload.authentication;
    },
  }
});

export const { setAuthentication } = AuthenticationSlice.actions;

export const getAuthentication = (state) => state.authentication.authentication;

export default AuthenticationSlice.reducer;