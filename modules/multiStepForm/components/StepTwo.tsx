"use client";

import { Input } from "@/components/ui/input";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepTwo = () => {
  const formData = useMultiStepFormStore((state) => state.formData);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  return (
    <div className="flex flex-col gap-3 bg-white/5 rounded-md p-3">
      <h3 className="text-xl font-bold">Step Two</h3>
      <Input
        value={formData.age}
        onChange={(event) => updateFormData({ age: event.target.value })}
        placeholder="Age"
        type="number"
      />

      <Input
        value={formData.occupation}
        onChange={(event) => updateFormData({ occupation: event.target.value })}
        placeholder="Occupation"
      />
    </div>
  );
};

export default StepTwo;
