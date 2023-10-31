import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchValueReducer from "./slices/searchValue";
import selectedUserReducer from "./slices/selectedUserSlice";
import sortReducer from "./slices/sortSlice";

const persistConfigSearch = {
  key: "search",
  storage,
};
const persistConfigSelectedUser = {
  key: "selectedUser",
  storage,
};
const persistConfigSorting = {
  key: "sorting",
  storage,
};

const persistedSearchValueReducer = persistReducer(
  persistConfigSearch,
  searchValueReducer
);
const persistedSelectedUserReducer = persistReducer(
  persistConfigSelectedUser,
  selectedUserReducer
);
const persistedSortReducer = persistReducer(persistConfigSorting, sortReducer);

export const store = configureStore({
  reducer: {
    searchValue: persistedSearchValueReducer,
    selectedUser: persistedSelectedUserReducer,
    sorting: persistedSortReducer,
  },
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
