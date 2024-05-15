import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isSignInOpen: false, isLoginOpen: false },
  reducers: {
    openSignIn(state) {
      state.isSignInOpen = true;
    },
    openLogin(state) {
      state.isLoginOpen = true;
    },
    closeSignIn(state) {
      state.isSignInOpen = false;
    },
    closeLogin(state) {
      state.isLoginOpen = false;
    },
    closeAuth(state) {
      state.isSignInOpen = false;
      state.isLoginOpen = false;
    },
  },
});

export const authActions = authSlice.actions;
export default authSlice;
