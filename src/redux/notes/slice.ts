import { createSlice } from "@reduxjs/toolkit";
import { Notes } from "./interface";

const initialState: Notes = {
  list: [],
  selectedNote: null,
};
export const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    // Add reducers here
  },
});

export const reducer = slice.reducer;
export const actions = {
    ...slice.actions,
    // Add your thunks here
};
