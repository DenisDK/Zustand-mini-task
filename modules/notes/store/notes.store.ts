import { create } from "zustand";
import { NotesStore } from "../types/notes.types";

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],

  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),
}));
