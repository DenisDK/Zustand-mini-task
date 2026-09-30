"use client";

import { Button } from "@/components/ui/button";
import { useMultiStepFormStore } from "../store/multiStepForm.store";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

const MultiStepForm = () => {
  const currentStep = useMultiStepFormStore((state) => state.currentStep);
  const nextStep = useMultiStepFormStore((state) => state.nextStep);
  const previousStep = useMultiStepFormStore((state) => state.previousStep);

  return (
    <div className="flex flex-col gap-2">
      {/* <p className="text-xl font-bold px-2">Current step: {currentStep}</p> */}
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}

      <div className="grid grid-cols-2 gap-2">
        <Button
          onClick={previousStep}
          variant="outline"
          className="mt-2 w-full"
        >
          Previous
        </Button>
        <Button onClick={nextStep} variant="outline" className="mt-2 w-full">
          Next
        </Button>
      </div>
    </div>
  );
};

export default MultiStepForm;
