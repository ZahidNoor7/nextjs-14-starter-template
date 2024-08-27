// ./reducers/appPreferences.ts
import axios from "axios";
import { toast } from "react-toastify";
import { appPreferences } from "@/types/types";
import { axiosHeaders, initializeBackendHost } from "@/utils/functions/configs";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

// Initial state
const initialState: appPreferences = {
  theme: "light",
};

// Define your async thunk function
export const updateSetting = createAsyncThunk(
  "appPreferences/updateSetting",
  async (
    data: { category_name: string; category_prompt: string },
    thunkAPI
  ) => {
    try {
      // Ensure backendHost is initialized before making the API call
      const backendHost = await initializeBackendHost();
      const headers = await axiosHeaders();

      const body = {};

      // Make the POST request using axios or any other library
      const response = await axios.post(`${backendHost}/api/endpoint`, body, {
        headers,
      });

      if (response) {
        thunkAPI.dispatch(toggleTheme("dark"));
      }

      toast.success("Successfull!");
      // Return the response data
      return response?.data;
    } catch (error: any) {
      // Handle any errors
      toast.error(error?.response?.data);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

// Create a slice with actions and a reducer
const appPreferencesSlice = createSlice({
  name: "appPreferences",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      state.theme = action.payload;
    },

    resetAppPreferences: (state) => {
      // Reset state to initial state
      Object.assign(state, initialState);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateSetting.pending, (state, action) => {});
    builder.addCase(
      updateSetting.fulfilled,
      (state, action: PayloadAction) => {}
    );
    builder.addCase(updateSetting.rejected, (state, action) => {});
  },
});

// Export actions and reducer
export const { toggleTheme, resetAppPreferences } = appPreferencesSlice.actions;
export default appPreferencesSlice.reducer;
