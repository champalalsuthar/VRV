import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
    userRole: "",
    userdata: ""
  },
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.userRole = action.payload.role;
      state.userdata = action.payload.user;
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("id", action.payload.id);
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.userRole = "";
      state.userdata = "";
      localStorage.removeItem("token");
      localStorage.removeItem("id");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
