import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuSlice";
import cartReducer from "./CartSlice";

const AppStore = configureStore({
  reducer: {
    cart: cartReducer,
    menu: MenuReducer,
  },
});
export default AppStore;
