"use client";

import { Button } from "@/components/ui/button";
import { FormData } from "../types/multiStepForm.types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

// Icons
import { VscDebugRestart } from "react-icons/vsc";
import { FaCircleCheck } from "react-icons/fa6";

type SubmitSuccessProps = {
  formData: FormData;
  onStartNewForm: () => void;
};

const SubmitSuccess = ({ formData, onStartNewForm }: SubmitSuccessProps) => {
  return (
    <div className="flex flex-col gap-3 bg-white/5 rounded-md border p-3 animate-in fade-in slide-in-from-right-2 duration-400">
      <div className="flex flex-col items-center gap-2">
        <FaCircleCheck className="animate-success-check text-[46px]" />
        <h2 className="text-2xl font-bold">Thanks, {formData.name}!</h2>

        <p className="text-sm text-white/50">
          {"We've"} received your details and will be in touch shortly.
        </p>
      </div>

      <div className="overflow-hidden rounded-md border border-white/10">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-white/50">Name:</TableCell>
              <TableCell className="text-right font-medium">
                {formData.name}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-white/50">Email:</TableCell>
              <TableCell className="break-all text-right font-medium">
                {formData.email}
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-white/50">Role:</TableCell>
              <TableCell className="text-right font-medium">
                {formData.role}
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <Button variant="outline" className="w-full" onClick={onStartNewForm}>
        <VscDebugRestart /> Start a new form
      </Button>
    </div>
  );
};

export default SubmitSuccess;
