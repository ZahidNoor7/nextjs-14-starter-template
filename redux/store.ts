import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
} from "redux-persist";
import { configureStore } from "@reduxjs/toolkit";
import persistedRootReducer from "./combineReducers";

/**
 * makeStore Function:
 * Configures and returns the Redux store with middleware and persistor using @reduxjs/toolkit and redux-persist.
 * @returns An object containing the configured Redux store and persistor.
 */

export const makeStore = () => {
  // Configure the Redux store using @reduxjs/toolkit
  const store = configureStore({
    reducer: persistedRootReducer, // Use the combined reducer here
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        // Ignore specific actions for serialization check during persisting
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  // Create a persistor to persist the Redux store using redux-persist
  const persistor = persistStore(store);

  // Return the configured store and persistor
  return { store, persistor };
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["store"]["getState"]>;
export type AppDispatch = AppStore["store"]["dispatch"];
