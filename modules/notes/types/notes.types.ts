export type Note = {
  id: string;
  title: string;
  content: string;
  isPinned: boolean;
  createdAt: Date;
};

export type NotesStore = {
  notes: Note[];
  addNote: (note: Note) => void;
};
