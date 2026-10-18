"use client";

import { Button } from "@/components/ui/button";

import { useState } from "react";
import CreateNoteDialog from "./CreateNoteDialog";

const CreateNoteButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        + New Note
      </Button>

      <CreateNoteDialog open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CreateNoteButton;
