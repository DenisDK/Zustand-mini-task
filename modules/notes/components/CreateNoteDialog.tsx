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

type CreateNoteDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const CreateNoteDialog = ({ open, onOpenChange }: CreateNoteDialogProps) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addNote = useNotesStore((state) => state.addNote);

  const handleCreateNote = () => {
    if (!title.trim()) return;

    addNote({
      id: crypto.randomUUID(),
      title: title.trim(),
      content: content.trim(),
      category: "uncategorized",
      color: "yellow",
      isPinned: false,
      createdAt: new Date(),
    });

    setTitle("");
    setContent("");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Create a new note</DialogTitle>
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
            onClick={handleCreateNote}
          >
            Create Note
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateNoteDialog;
