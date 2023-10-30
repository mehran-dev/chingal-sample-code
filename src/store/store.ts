import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import searchValueReducer from "./slices/searchValue";
import selectedUserReducer from "./slices/selectedUserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const persistedSearchValueReducer = persistReducer(
  persistConfig,
  searchValueReducer
);
const persistedSelectedUserReducer = persistReducer(
  persistConfig,
  selectedUserReducer
);

export const store = configureStore({
  reducer: {
    searchValue: persistedSearchValueReducer,
    selectedUser: persistedSelectedUserReducer,
  },
});

export const persistor = persistStore(store);

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
