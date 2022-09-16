import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
  loading: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: state => {
      state.loading = true;
      state.error = "";
    },
    getUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    getUsersError: (state, action) => {
      state.users = [];
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { getUsers, getUsersSuccess, getUsersError } = userSlice.actions;

export default userSlice.reducer;
