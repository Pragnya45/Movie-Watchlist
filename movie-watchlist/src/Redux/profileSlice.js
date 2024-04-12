import { createSlice } from "@reduxjs/toolkit";
import { logoutFn } from "./logoutSlice";

const initialState = {
  email: "",
  token: "",
  isLoggedIn: false,
};

const profileSlice = createSlice({
  name: "Profile",
  initialState,
  reducers: {
    profileFn: (state, action) => {
      for (let key in state) {
        if (action.payload.hasOwnProperty(key)) {
          state[key] = action.payload[key];
        }
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutFn, (state) => {
      return { ...initialState };
    });
  },
});

const profileReducer = profileSlice.reducer;
const profileState = (state) => state.profile;
const { profileFn } = profileSlice.actions;

export { profileReducer, profileState, profileFn };
