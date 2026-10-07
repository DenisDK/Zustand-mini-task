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
      <div className="flex flex-col gap-1">
        <h2 className="text-[14px] text-white/60">Introduction</h2>
        <h3 className="text-2xl font-bold text-white/90">
          What should we call you?
        </h3>
      </div>

      <div className="">
        <label htmlFor="name" className="text-sm text-white/50">
          First name works great.
        </label>
        <Input
          id="name"
          className="mt-1"
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

      {/* <div className="">
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
      </div> */}
    </div>
  );
};

export default StepOne;
