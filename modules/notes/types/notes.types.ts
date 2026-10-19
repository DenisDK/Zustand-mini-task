export type NoteCategory =
  | "work"
  | "study"
  | "personal"
  | "ideas"
  | "tasks"
  | "uncategorized";

export type NoteColor =
  | "yellow"
  | "pink"
  | "blue"
  | "green"
  | "purple"
  | "peach";

export type Note = {
  id: string;
  title: string;
  content: string;
  category: NoteCategory;
  color: NoteColor;
  isPinned: boolean;
  createdAt: Date;
};

export type NotesStore = {
  notes: Note[];
  addNote: (note: Note) => void;
  removeNote: (id: string) => void;
  togglePin: (id: string) => void;
  updateNote: (id: string, updates: Pick<Note, "title" | "content">) => void;
};
