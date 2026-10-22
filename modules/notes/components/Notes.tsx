"use client";

import { Button } from "@/components/ui/button";
import { useNotesStore } from "../store/notes.store";
import CreateNoteButton from "./CreateNoteButton";
import { useState } from "react";
import type { Note } from "../types/notes.types";
import { Separator } from "@/components/ui/separator";
import CreateNoteDialog from "./CreateNoteDialog";
import NoteSearch from "./NoteSearch";
import type { NoteCategory } from "../types/notes.types";
import NoteFilter from "./NoteFilter";
import { colorItems } from "../constants/noteColors";

// Icons
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { IoPencil } from "react-icons/io5";
import { LuTrash2 } from "react-icons/lu";

type NoteFilter = "all" | "pinned" | NoteCategory;

const Notes = () => {
  const notes = useNotesStore((state) => state.notes);
  const removeNote = useNotesStore((state) => state.removeNote);
  const togglePin = useNotesStore((state) => state.togglePin);

  const [selectedNote, setSelectedNote] = useState<Note | undefined>();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [filter, setFilter] = useState<NoteFilter>("all");

  const filteredNotes = notes.filter((note) => {
    const query = searchQuery.trim().toLowerCase();

    const matchesSearch =
      note.title.toLowerCase().includes(query) ||
      note.content.toLowerCase().includes(query);

    const matchesFilter =
      filter === "all" ||
      (filter === "pinned" && note.isPinned) ||
      note.category === filter;

    return matchesSearch && matchesFilter;
  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.isPinned !== b.isPinned) {
      return Number(b.isPinned) - Number(a.isPinned);
    }

    return b.createdAt.getTime() - a.createdAt.getTime();
  });

  return (
    <section className="">
      <h2>My Notes</h2>

      <p>Total notes: {notes.length}</p>

      <div className="flex items-center gap-2 mt-5">
        <NoteSearch value={searchQuery} onChange={setSearchQuery} />
        <NoteFilter value={filter} onChange={setFilter} />
      </div>

      {filteredNotes.length > 0 ? (
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-4 mt-5">
          {sortedNotes.map((note) => (
            <article
              key={note.id}
              className="rounded-2xl border min-h-56 p-2 flex flex-col h-full duration-300 hover:brightness-85 text-[#202020]"
              style={{
                backgroundColor: colorItems.find(
                  (item) => item.value === note.color,
                )?.hex,
              }}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{note.title}</h3>
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

              <Separator className={"mt-1 bg-[#202020]"} />

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
      ) : (
        <p className="mt-5 text-center text-muted-foreground">
          {notes.length === 0
            ? "You don't have any notes yet. Create your first note! :("
            : "No notes found. Try a different search. :("}
        </p>
      )}

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
