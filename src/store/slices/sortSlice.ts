import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface sortElements {
  field: any;
  order: any;
  column: any;
  columnKey: any;
}

export interface SortingState {
  value: sortElements;
}

const initialState: SortingState = {
  value: {
    field: null,
    order: null,
    column: null,
    columnKey: null,
  },
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<sortElements>) => {
      state.value = action.payload;
    },
  },
});

export const { setSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
