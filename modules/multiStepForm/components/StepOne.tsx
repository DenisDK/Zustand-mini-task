"use client";

import { Input } from "@/components/ui/input";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepOne = () => {
  const formData = useMultiStepFormStore((state) => state.formData);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  return (
    <div className="flex flex-col gap-3 bg-white/5 rounded-md p-3">
      <h3 className="text-xl font-bold">Step One</h3>
      <Input
        value={formData.name}
        onChange={(event) => updateFormData({ name: event.target.value })}
        placeholder="Name"
      />

      <Input
        value={formData.email}
        onChange={(event) => updateFormData({ email: event.target.value })}
        placeholder="Email"
        type="email"
      />
    </div>
  );
};

export default StepOne;
