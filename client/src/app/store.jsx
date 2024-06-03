import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import api from "../features/data/DataSlice";

// Persist configuration
const persistConfig = {
  key: "root",
  storage,
  // You can specify which reducers you want to persist
  whitelist: [api.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, api.reducer);
const store = configureStore({
  reducer: {
    [api.reducerPath]: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);
export default store;
