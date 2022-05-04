import { configureStore, createSlice } from "@reduxjs/toolkit";
const initAuthState = {
  isAuthenticated: false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState: initAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const authActions = AuthSlice.actions;
const redStore = configureStore({
  reducer: { auth: AuthSlice.reducer },
});

export default redStore;
export { authActions };
