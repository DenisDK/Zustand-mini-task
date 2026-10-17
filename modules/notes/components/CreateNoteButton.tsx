"use client";

import { Button } from "@/components/ui/button";

// Icons
import { IoAddOutline } from "react-icons/io5";

const CreateNoteButton = () => {
  return (
    <Button variant="outline" className="">
      <IoAddOutline className="size-5" /> add
    </Button>
  );
};

export default CreateNoteButton;
