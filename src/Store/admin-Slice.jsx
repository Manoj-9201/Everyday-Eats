import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
  name: "admin",
  initialState: { component: null },
  reducers: {
    displayComponent(state, action) {
      state.component = action.payload;
    },
  },
});

export const adminAction = adminSlice.actions;
export default adminSlice;
