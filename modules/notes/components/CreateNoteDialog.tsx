"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useNotesStore } from "../store/notes.store";
import type { Note } from "../types/notes.types";

type CreateNoteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  note?: Note;
};

const CreateNoteDialog = ({
  open,
  onOpenChange,
  note,
}: CreateNoteDialogProps) => {
  const [title, setTitle] = useState(note?.title ?? "");
  const [content, setContent] = useState(note?.content ?? "");

  const addNote = useNotesStore((state) => state.addNote);
  const updateNote = useNotesStore((state) => state.updateNote);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (note) {
      updateNote(note.id, {
        title: title.trim(),
        content: content.trim(),
      });
    } else {
      addNote({
        id: crypto.randomUUID(),
        title: title.trim(),
        content: content.trim(),
        category: "uncategorized",
        color: "yellow",
        isPinned: false,
        createdAt: new Date(),
      });
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{note ? "Edit note" : "Create a new note"}</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="note-title">Title</label>
            <Input
              id="note-title"
              className="mt-1"
              placeholder="Enter note title..."
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="note-content">Content</label>
            <Textarea
              id="note-content"
              className="mt-1"
              placeholder="Write your note..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          <Button
            variant="outline"
            className="w-full"
            type="button"
            onClick={handleSubmit}
          >
            {note ? "Save Changes" : "Create Note"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
