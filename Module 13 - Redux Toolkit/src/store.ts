import { configureStore, createSlice } from "@reduxjs/toolkit";

let initialState = { value: { username: "" } };
let userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export let { login, logout } = userSlice.actions;

export let store = configureStore({});
