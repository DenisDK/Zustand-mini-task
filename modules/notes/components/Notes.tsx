"use client";

import { Button } from "@/components/ui/button";
import { useNotesStore } from "../store/notes.store";
import CreateNoteButton from "./CreateNoteButton";
import { useState } from "react";
import type { Note } from "../types/notes.types";

// Icons
import { IoClose } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import CreateNoteDialog from "./CreateNoteDialog";

const Notes = () => {
  const notes = useNotesStore((state) => state.notes);
  const removeNote = useNotesStore((state) => state.removeNote);
  const togglePin = useNotesStore((state) => state.togglePin);

  const [selectedNote, setSelectedNote] = useState<Note | undefined>();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

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
            onClick={() => {
              setSelectedNote(note);
              setIsEditDialogOpen(true);
            }}
          >
            <IoPencil />
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

      {/* Редагування нотатки */}
      <CreateNoteDialog
        key={selectedNote?.id ?? "edit-note"}
        open={isEditDialogOpen}
        onOpenChange={(open) => {
          setIsEditDialogOpen(open);

          if (!open) {
            setSelectedNote(undefined);
          }
        }}
        note={selectedNote}
      />
    </section>
  );
};

export default Notes;
