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
  const submitForm = useMultiStepFormStore((state) => state.submitForm);
  const resetForm = useMultiStepFormStore((state) => state.resetForm);

  return (
    <div className="flex flex-col gap-2">
      {/* <p className="text-xl font-bold px-2">Current step: {currentStep}</p> */}
      {currentStep === 1 && <StepOne />}
      {currentStep === 2 && <StepTwo />}
      {currentStep === 3 && <StepThree />}

      <div className="flex gap-2">
        {currentStep > 1 && (
          <Button
            onClick={previousStep}
            variant="outline"
            className="mt-1 flex-1"
          >
            Previous
          </Button>
        )}

        {currentStep < 3 && (
          <Button onClick={nextStep} variant="outline" className="mt-1 flex-1">
            Next
          </Button>
        )}

        {currentStep === 3 && (
          <Button
            onClick={() => {
              submitForm();
              resetForm();
            }}
            variant="outline"
            className="mt-1 flex-1"
          >
            Submit
          </Button>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
