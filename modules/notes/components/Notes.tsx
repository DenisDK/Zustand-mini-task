"use client";

import { useNotesStore } from "../store/notes.store";
import CreateNoteButton from "./CreateNoteButton";

const Notes = () => {
  const notes = useNotesStore((state) => state.notes);

  return (
    <section>
      <h2>My Notes</h2>

      <p>Total notes: {notes.length}</p>

      {notes.map((note) => (
        <article key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>
        </article>
      ))}

      <CreateNoteButton />
    </section>
  );
};

export default Notes;
