"use client";

import { useMultiStepFormStore } from "../store/multiStepForm.store";

// Icons
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaRegDotCircle } from "react-icons/fa";

const StepIndicator = () => {
  const steps = ["Step 1", "Step 2", "Step 3"];
  const currentStep = useMultiStepFormStore((state) => state.currentStep);

  return (
    <div className="flex w-full items-start">
      {steps.map((step, index) => {
        const stepNumber = index + 1;

        const isCompleted = stepNumber < currentStep;
        const isActive = stepNumber === currentStep;

        return (
          <div
            key={step}
            className={`flex items-start ${
              index < steps.length - 1 ? "flex-1" : ""
            }`}
          >
            {/* Step */}
            <div className="flex shrink-0 flex-col items-center">
              {isCompleted ? (
                <FaRegCheckCircle className="text-[20px] animate-in fade-in zoom-in duration-200 text-green-400 " />
              ) : isActive ? (
                <FaRegDotCircle className="text-[20px] animate-in fade-in zoom-in duration-200 text-blue-400 " />
              ) : (
                <FaRegCircle className="text-[20px] animate-in fade-in zoom-in duration-200 text-gray-400 " />
              )}

              <span className={isActive ? "font-bold" : ""}>{step}</span>
            </div>

            {/* Line */}
            {index < steps.length - 1 && (
              <div
                className={`mt-2 -mx-2.5 h-0.5 flex-1 ${
                  isCompleted ? "bg-green-400" : "bg-white/20"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepIndicator;
