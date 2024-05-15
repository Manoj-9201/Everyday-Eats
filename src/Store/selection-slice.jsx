import { createSlice } from "@reduxjs/toolkit";

const selectionSlice = createSlice({
  name: "select",
  initialState: { isDishClicked: false, selectedId: null },
  reducers: {
    selectOptions(state, action) {
      state.isDishClicked = true;
      state.selectedId = action.payload;
    },
  },
});

export const selectionAction = selectionSlice.actions;

export default selectionSlice;
