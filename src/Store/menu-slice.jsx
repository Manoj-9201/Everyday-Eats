import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";

const foodItems = food_list;

const menuSlice = createSlice({
  name: "menu",
  initialState: { menuItems: foodItems, previousPayload: null, color: null },
  reducers: {
    addToMenu(state, action) {
      if (state.previousPayload !== action.payload) {
        state.color = action.payload;
        state.menuItems = [];
        const matchedItems = foodItems.filter(
          (items) => items.category === action.payload
        );
        matchedItems.forEach((item) => {
          state.menuItems.push(item);
        });
        state.previousPayload = action.payload;
      } else {
        state.menuItems = foodItems;
        state.color = null;
        state.previousPayload = null;
      }
    },
  },
});
export const menuAction = menuSlice.actions;
export default menuSlice;
