import { configureStore } from "@reduxjs/toolkit";
import MenuReducer from "./MenuSlice";

const AppStore = configureStore({
  reducer: {
    menu: MenuReducer,
  },
});
export default AppStore;
