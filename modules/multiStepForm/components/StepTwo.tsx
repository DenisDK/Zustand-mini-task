"use client";

import { Input } from "@/components/ui/input";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepTwo = ({
  errors,
  setErrors,
}: {
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  const formData = useMultiStepFormStore((state) => state.formData);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  return (
    <div className="flex flex-col gap-3 ">
      <h3 className="text-xl font-bold">Step Two</h3>
      <div className="">
        <Input
          value={formData.age}
          onChange={(event) => {
            updateFormData({ age: event.target.value });

            setErrors((prev) => ({
              ...prev,
              age: "",
            }));
          }}
          placeholder="Age"
          type="number"
        />
        {errors.age && (
          <p className="mt-1 text-sm text-red-400">{errors.age}</p>
        )}
      </div>

      <div className="">
        <Input
          value={formData.occupation}
          onChange={(event) => {
            updateFormData({ occupation: event.target.value });

            setErrors((prev) => ({
              ...prev,
              occupation: "",
            }));
          }}
          placeholder="Occupation"
        />
        {errors.occupation && (
          <p className="mt-1 text-sm text-red-400">{errors.occupation}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
