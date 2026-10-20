"use client";

import { Button } from "@/components/ui/button";
import { useNotesStore } from "../store/notes.store";
import CreateNoteButton from "./CreateNoteButton";
import { useState } from "react";
import type { Note } from "../types/notes.types";
import { Separator } from "@/components/ui/separator";
import CreateNoteDialog from "./CreateNoteDialog";

// Icons
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

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

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 mt-5">
        {notes.map((note) => (
          <article
            key={note.id}
            className="rounded-2xl border min-h-56 bg-white/5 p-2 flex flex-col h-full hover:bg-white/8 duration-300"
          >
            <div className="flex items-center justify-between">
              <h3>{note.title}</h3>
              <Button
                variant="outline"
                size="icon"
                className="hover:text-yellow-500"
                onClick={() => togglePin(note.id)}
              >
                {note.isPinned ? (
                  // <FaStar className="text-yellow-500" />
                  <FaRegStar className="text-yellow-500" />
                ) : (
                  <FaRegStar />
                )}
              </Button>
            </div>

            <Separator className={"mt-1"} />

            <p className="my-2">{note.content}</p>

            <div className="mt-auto flex justify-between items-center">
              <div className="">
                {note.createdAt.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:text-blue-400"
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
                  className="hover:text-red-400"
                  onClick={() => removeNote(note.id)}
                >
                  <LuTrash2 />
                </Button>
              </div>
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
