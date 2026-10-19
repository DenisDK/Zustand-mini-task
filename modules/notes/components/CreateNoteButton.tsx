"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import CreateNoteDialog from "./CreateNoteDialog";

const CreateNoteButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button variant="outline" onClick={() => setOpen(true)}>
        + New Note
      </Button>

      <CreateNoteDialog
        key={open ? "create-open" : "create-closed"}
        open={open}
        onOpenChange={setOpen}
      />
    </>
  );
};

export default CreateNoteButton;
