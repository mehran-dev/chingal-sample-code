import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SearchValueState {
  value: string;
}

const initialState: SearchValueState = {
  value: "",
};

export const searchValueSlice = createSlice({
  name: "searchValue",
  initialState,
  reducers: {
    set: (state) => {
      state.value = "";
    },
    clear: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { set, clear } = searchValueSlice.actions;

export default searchValueSlice.reducer;
