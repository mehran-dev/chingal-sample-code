import { User } from "@/@types/user";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface SelectedUserState {
  value: User | null;
}

const initialState: SelectedUserState = {
  value: null,
};

export const selectedUserSlice = createSlice({
  name: "selectedUser",
  initialState,
  reducers: {
    unselect: (state) => {
      state.value = null;
    },
    select: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    },
  },
});

export const { select, unselect } = selectedUserSlice.actions;

export default selectedUserSlice.reducer;
