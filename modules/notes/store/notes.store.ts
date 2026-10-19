import { create } from "zustand";
import type { NotesStore } from "../types/notes.types";

export const useNotesStore = create<NotesStore>((set) => ({
  notes: [],

  addNote: (note) =>
    set((state) => ({
      notes: [...state.notes, note],
    })),

  removeNote: (id) =>
    set((state) => ({
      notes: state.notes.filter((note) => note.id !== id),
    })),

  togglePin: (id) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, isPinned: !note.isPinned } : note,
      ),
    })),

  updateNote: (id, updates) =>
    set((state) => ({
      notes: state.notes.map((note) =>
        note.id === id ? { ...note, ...updates } : note,
      ),
    })),
}));
