import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "@reduxjs/toolkit";

import counterSlice from "./Reducers/counterSlice";
import appPreferencesSlice from "./Reducers/appPreferencesSlice";

const { NEXT_PUBLIC_APPLICATION_NAME } = process.env;

// Configure Redux-Persist
const persistConfig = {
  key: NEXT_PUBLIC_APPLICATION_NAME ?? "NextApp",
  storage,
  whitelist: ["counter", "appPreferences"], // Reducers to persist
};

// Combine all the reducers into one
const rootReducer = combineReducers({
  counter: counterSlice,
  appPreferences: appPreferencesSlice,

  // Add more slices as needed
});

// Create a persisted reducer
const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
