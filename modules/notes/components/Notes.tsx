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
import { Separator } from "@/components/ui/separator";

const Notes = () => {
  const notes = useNotesStore((state) => state.notes);
  const removeNote = useNotesStore((state) => state.removeNote);
  const togglePin = useNotesStore((state) => state.togglePin);

  const [selectedNote, setSelectedNote] = useState<Note | undefined>();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  return (
    <section className="">
      <h2>My Notes</h2>

      <p>Total notes: {notes.length}</p>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-4 lg:grid-cols-5 mt-5">
        {notes.map((note) => (
          <article key={note.id} className="rounded-2xl border bg-white/5 p-2">
            <h3>{note.title}</h3>

            <Separator className={"mt-1"} />

            <p className="mt-1">{note.content}</p>

            <div className="flex items-center gap-2 mt-2">
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
            </div>
          </article>
        ))}
      </div>

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
