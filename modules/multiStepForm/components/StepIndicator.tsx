"use client";

import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepIndicator = () => {
  const steps = ["Personal", "Details", "Review"];
  const currentStep = useMultiStepFormStore((state) => state.currentStep);

  return (
    <div className="flex gap-4 mb-2">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;
        return (
          <div
            key={step}
            className={`flex items-center gap-2 ${isActive ? "font-bold" : ""}`}
          >
            <div>{isCompleted ? "✓" : isActive ? "●" : "○"}</div>
            <span>{step}</span>
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
