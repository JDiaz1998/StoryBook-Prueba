import { createSlice } from "@reduxjs/toolkit";

export const taskSlice = createSlice({
  name: "task",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
    // active: {
    //   id: "ABC123",
    //   title: "",
    //   body: "",
    //   date: 1234567,
    // },
  },
  reducers: {
    savingNewTask: (state) => {
      state.isSaving = true;
    },
    addNewEmptyTask: (state, action) => {
      state.notes.push(action.payload);
      state.isSaving = false;
    },
    setActiveTask: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setTask: (state, action) => {
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSaving = true;
      state.messageSaved = "";
    },
    updateTask: (state, action) => {
      state.isSaving = false;
      state.notes = state.notes.map((task) => {
        if (task.id === action.payload.id) {
          return action.payload;
        }
        return task;
      });

      state.messageSaved = `${action.payload.title}, actualizada correctamente.`;
    },
    clearTaskLogout: (state) => {
      state.isSaving = false;
      state.messageSaved = "";
      state.notes = [];
      state.active = null;
    },
    deleteTaksById: (state, action) => {
      state.active = null;
      state.notes = state.notes.filter((task) => task.id !== action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  savingNewTask,
  addNewEmptyTask,
  setActiveTask,
  setTask,
  setSaving,
  updateTask,
  clearTaskLogout,
  deleteTaksById,
} = taskSlice.actions;
