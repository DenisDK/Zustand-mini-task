"use client";

import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepThree = () => {
  const formData = useMultiStepFormStore((state) => state.formData);

  return (
    <div className="flex flex-col gap-3 bg-white/5 rounded-md p-3">
      <h3 className="text-xl font-bold">Step Three</h3>
      <div className="space-y-2">
        <p>Name: {formData.name}</p>
        <p>Email: {formData.email}</p>
        <p>Age: {formData.age}</p>
        <p>Occupation: {formData.occupation}</p>
      </div>
    </div>
  );
};

export default StepThree;
