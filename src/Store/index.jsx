import { configureStore } from "@reduxjs/toolkit";
import menuSlice from "./menu-slice";
import selectionSlice from "./selection-slice";
import cartSlice from "./cart-slice";
import authSlice from "./authSlice";
import adminSlice from "./admin-Slice";
import searchSlice from "./searchSlice";

const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    selection: selectionSlice.reducer,
    cart: cartSlice.reducer,
    auth: authSlice.reducer,
    admin: adminSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;
