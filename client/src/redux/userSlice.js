import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  user: null,
  loading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsersLoading: (state, payload) => {
      state.loading = payload;
    },
  },
});

export const { setUsersLoading } = userSlice.actions;
export default userSlice.reducer;
