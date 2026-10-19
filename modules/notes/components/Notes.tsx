"use client";

import { Button } from "@/components/ui/button";
import { useNotesStore } from "../store/notes.store";
import CreateNoteButton from "./CreateNoteButton";

// Icons
import { IoClose } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const Notes = () => {
  const notes = useNotesStore((state) => state.notes);
  const removeNote = useNotesStore((state) => state.removeNote);
  const togglePin = useNotesStore((state) => state.togglePin);

  return (
    <section>
      <h2>My Notes</h2>

      <p>Total notes: {notes.length}</p>

      {notes.map((note) => (
        <article key={note.id}>
          <h3>{note.title}</h3>
          <p>{note.content}</p>

          <Button
            variant="outline"
            size="icon"
            onClick={() => togglePin(note.id)}
          >
            {note.isPinned ? (
              // <FaRegStar className="text-yellow-500" />
              <FaStar className="text-yellow-500" />
            ) : (
              <FaRegStar />
            )}
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={() => removeNote(note.id)}
          >
            <IoClose />
          </Button>
        </article>
      ))}

      <CreateNoteButton />
    </section>
  );
};

export default Notes;
