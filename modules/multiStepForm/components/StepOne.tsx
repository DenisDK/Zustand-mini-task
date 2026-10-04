"use client";

import { Input } from "@/components/ui/input";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepOne = ({
  errors,
  setErrors,
}: {
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  const formData = useMultiStepFormStore((state) => state.formData);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  return (
    <div className="flex flex-col gap-3">
      <h3 className="text-xl font-bold">Step One</h3>
      <div className="">
        <Input
          value={formData.name}
          onChange={(event) => {
            updateFormData({ name: event.target.value });

            setErrors((prev) => ({
              ...prev,
              name: "",
            }));
          }}
          placeholder="Name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div className="">
        <Input
          value={formData.email}
          onChange={(event) => {
            updateFormData({ email: event.target.value });

            setErrors((prev) => ({
              ...prev,
              email: "",
            }));
          }}
          placeholder="Email"
          type="email"
        />

        {errors.email && (
          <p className=" mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>
    </div>
  );
};

export default StepOne;
