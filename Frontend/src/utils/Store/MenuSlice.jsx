import { createSlice } from "@reduxjs/toolkit";

const MenuSlice = createSlice({
  name: "menu",
  initialState: {
    data: [],
  },
  reducers: {
    getData: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { getData } = MenuSlice.actions;
export default MenuSlice.reducer;
