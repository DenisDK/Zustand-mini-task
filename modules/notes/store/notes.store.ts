import { create } from "zustand";
import type { NotesStore } from "../types/notes.types";
import { createJSONStorage, persist } from "zustand/middleware";

export const useNotesStore = create<NotesStore>()(
  persist(
    (set) => ({
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
    }),
    {
      name: "notes-storage",
      storage: createJSONStorage(() => localStorage),
      onRehydrateStorage: () => (state) => {
        if (!state) return;

        state.notes = state.notes.map((note) => ({
          ...note,
          createdAt: new Date(note.createdAt),
        }));
      },
    },
  ),
);
