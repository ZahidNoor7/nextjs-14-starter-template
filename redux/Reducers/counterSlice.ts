// ./reducers/counterSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the state type
export interface CounterState {
  value: number;
  total: number;
}

// Initial state
const initialState: CounterState = {
  value: 0,
  total: 0,
};

// Create a slice with actions and a reducer
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Increment action
    increment: (state) => {
      state.value += 1;
    },
    // Decrement action
    decrement: (state) => {
      state.value -= 1;
    },
    // Increment by a specific value action
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    // Decrement by a specific value action
    decrementBy: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

// Export actions and reducer
export const { increment, decrement, incrementBy, decrementBy } =
  counterSlice.actions;
export default counterSlice.reducer;
