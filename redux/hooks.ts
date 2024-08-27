import { useDispatch, useSelector, useStore } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Custom Typed Hooks for Redux
// --------------------------------------------------

/**
 * useAppDispatch:
 * A custom hook that returns the `dispatch` function from the Redux store.
 * It ensures type safety by explicitly defining the type as `AppDispatch`.
 */
export const useAppDispatch: () => AppDispatch = useDispatch;

/**
 * useAppSelector:
 * A custom hook that provides a typed selector hook for accessing the Redux store's state.
 * It ensures type safety by explicitly defining the type as `RootState`.
 */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/**
 * useAppStore:
 * A custom hook that returns the entire Redux store.
 * It is used to access additional store-related methods and properties.
 */
export const useAppStore: () => ReturnType<typeof useStore> = useStore;

// --------------------------------------------------
