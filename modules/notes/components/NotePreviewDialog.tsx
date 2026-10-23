"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import type { Note } from "../types/notes.types";
import { colorItems } from "../constants/noteColors";

type NotePreviewDialogProps = {
  note: Note | undefined;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

const NotePreviewDialog = ({
  note,
  open,
  onOpenChange,
}: NotePreviewDialogProps) => {
  if (!note) return null;

  const noteColor = colorItems.find((item) => item.value === note.color)?.hex;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="max-w-2xl overflow-hidden border border-[#202020]/20 p-0 [&>button:last-child]:text-[#202020] [&>button:last-child]:opacity-70 [&>button:last-child]:hover:opacity-100 [&>button:last-child]:hover:bg-[#202020]/10"
        style={{ backgroundColor: noteColor }}
      >
        <div className="p-6 text-[#202020]">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold wrap-break-word">
              {note.title}
            </DialogTitle>
          </DialogHeader>

          <Separator className="my-3 bg-[#202020]/20" />

          <div className="max-h-[60vh] overflow-y-auto whitespace-pre-wrap wrap-break-word">
            {note.content}
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-2 text-sm text-[#202020]/70">
            <span>
              {note.category.charAt(0).toUpperCase() + note.category.slice(1)}
            </span>

            <span>
              {note.createdAt.toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotePreviewDialog;
