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
import type { Note, NoteCategory, NoteColor } from "../types/notes.types";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterItems } from "../constants/noteCategory";
import { colorItems } from "../constants/noteColors";

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

  const [category, setCategory] = useState<NoteCategory>(
    note?.category ?? "uncategorized",
  );

  const [color, setColor] = useState<NoteColor>(note?.color ?? "yellow");

  const addNote = useNotesStore((state) => state.addNote);
  const updateNote = useNotesStore((state) => state.updateNote);

  const handleSubmit = () => {
    if (!title.trim()) return;

    if (note) {
      updateNote(note.id, {
        title: title.trim(),
        content: content.trim(),
        category,
        color,
      });
    } else {
      addNote({
        id: crypto.randomUUID(),
        title: title.trim(),
        content: content.trim(),
        category: category,
        color: color,
        isPinned: false,
        createdAt: new Date(),
      });
    }

    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className={
          "border p-5 border-[#c0c0c0] bg-[#ebebeb] text-gray-900 shadow-xl [&>button:last-child]:text-[#202020] [&>button:last-child]:opacity-70 [&>button:last-child]:hover:opacity-100 [&>button:last-child]:hover:bg-[#202020]/10"
        }
      >
        <DialogHeader>
          <DialogTitle className={"text-gray-900"}>
            {note ? "Edit note" : "Create a new note"}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex-1">
              <label htmlFor="note-title" className="text-gray-900">
                Title
              </label>
              <Input
                id="note-title"
                className="mt-1 border-[#c0c0c0]"
                placeholder="Enter note title..."
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </div>

            <div className="">
              <label htmlFor="category" className="text-gray-900">
                Category
              </label>
              <Select
                value={category}
                id="category"
                onValueChange={(newValue) => {
                  if (newValue !== null) {
                    setCategory(newValue as NoteCategory);
                  }
                }}
              >
                <SelectTrigger className="mt-1 border-[#c0c0c0]">
                  <SelectValue placeholder="Filter notes" />
                </SelectTrigger>

                <SelectContent className="border border-gray-300 bg-[#ebebeb] text-gray-900">
                  <SelectGroup>
                    <SelectLabel className="text-gray-900">
                      Category
                    </SelectLabel>

                    {filterItems
                      .filter(
                        (item) =>
                          item.value !== "all" && item.value !== "pinned",
                      )
                      .map((item) => (
                        <SelectItem
                          key={item.value}
                          value={item.value}
                          className="text-gray-800 focus:bg-[#dcdcdc] focus:text-gray-900 focus:**:text-gray-900!"
                        >
                          {item.label}
                        </SelectItem>
                      ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            <div className="">
              <label htmlFor="color" className="text-gray-900">
                Color
              </label>
              <Select
                value={color}
                id="color"
                onValueChange={(newValue) => {
                  if (newValue !== null) {
                    setColor(newValue as NoteColor);
                  }
                }}
              >
                <SelectTrigger className="mt-1 border-[#c0c0c0]">
                  <SelectValue placeholder="Filter notes" />
                </SelectTrigger>

                <SelectContent>
                  <SelectGroup className={"bg-[#ebebeb]"}>
                    <SelectLabel className={"text-gray-800"}>Color</SelectLabel>
                    {colorItems.map((item) => (
                      <SelectItem
                        key={item.value}
                        value={item.value}
                        className="text-gray-800 focus:bg-[#dcdcdc] focus:text-gray-900! focus:**:text-gray-900!"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="size-3.5 rounded-full border border-black/15"
                            style={{ backgroundColor: item.hex }}
                          />
                          {item.label}
                        </div>
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="note-content">Content</label>
            <Textarea
              id="note-content"
              className="mt-1 border-[#c0c0c0]"
              placeholder="Write your note..."
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>

          <Button
            variant="outline"
            className="w-full border-[#c0c0c0]! text-gray-700 hover:bg-[#d3d3d3]! hover:text-black"
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
