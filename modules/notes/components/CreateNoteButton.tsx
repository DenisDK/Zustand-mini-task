"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateNoteDialog from "./CreateNoteDialog";

const CreateNoteButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex items-center justify-end">
      <Button
        variant="outline"
        className="mt-5 border border-[#c0c0c0]! text-gray-600 hover:text-gray-900 hover:bg-[#e7e7e7]!"
        onClick={() => setOpen(true)}
      >
        + New Note
      </Button>

      <CreateNoteDialog
        key={open ? "create-open" : "create-closed"}
        open={open}
        onOpenChange={setOpen}
      />
    </div>
  );
};

export default CreateNoteButton;
