import { createSlice } from "@reduxjs/toolkit";

export const AuthSlice = createSlice({
  name: "auth",
  initialState: {
    auth: false,
    userInfo: {}
  },
  reducers: {
    setAuth: (state, action) => {
      state.auth = action.payload.auth;
      state.userInfo = action.payload.userInfo;
    },
  }
});

export const { setAuth } = AuthSlice.actions;

export const getAuth = (state) => state.auth.auth;
export const getUserInfo = (state) => state.auth.userInfo;

export default AuthSlice.reducer;