import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Note, Notes } from "./interface";

const initialState: Notes = {
  list: [],
  selectedNote: null,
};

export const slice = createSlice({
  name: "notes",
  initialState,
  reducers: {
   setList: (state, { payload } : PayloadAction<Note[]>) => {
      state.list = payload;
    },
    updateNote: (state, { payload } : PayloadAction<Note>) => {
      const findNoteIndex = state.list.findIndex((note) => note.id === payload.id);
      state.list[findNoteIndex] = payload;
    },
    addNote: (state, { payload } : PayloadAction<Note>) => {
      state.list.push(payload);
    },
    deleteNote: (state, { payload } : PayloadAction<string>) => {
      state.list = state.list.filter((note) => note.id !== payload);
    },
    setSelectedNote: (state, { payload } : PayloadAction<Note>) => {
      state.selectedNote = payload;
    },
  },
});

export const reducer = slice.reducer;
export const actions = {
    ...slice.actions,
    // Add your thunks here
};
