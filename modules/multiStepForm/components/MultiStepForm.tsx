"use client";

import { Button } from "@/components/ui/button";
import { useMultiStepFormStore } from "../store/multiStepForm.store";
import StepOne from "./StepOne";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";
import { stepOneSchema, stepTwoSchema } from "../schemas/multiStepForm.schema";
import { useState } from "react";
import StepIndicator from "./StepIndicator";
import StepFour from "./StepFour";

const MultiStepForm = () => {
  const currentStep = useMultiStepFormStore((state) => state.currentStep);
  const nextStep = useMultiStepFormStore((state) => state.nextStep);
  const previousStep = useMultiStepFormStore((state) => state.previousStep);
  const submitForm = useMultiStepFormStore((state) => state.submitForm);
  const resetForm = useMultiStepFormStore((state) => state.resetForm);
  const formData = useMultiStepFormStore((state) => state.formData);

  const [errors, setErrors] = useState<Record<string, string>>({});

  return (
    <div className="flex flex-col gap-2">
      {/* <p className="text-xl font-bold px-2">Current step: {currentStep}</p> */}
      <StepIndicator />
      <div
        key={currentStep}
        className="bg-white/5 rounded-md border p-3 animate-in fade-in slide-in-from-right-2 duration-400"
      >
        {currentStep === 1 && <StepOne errors={errors} setErrors={setErrors} />}
        {currentStep === 2 && <StepTwo errors={errors} setErrors={setErrors} />}
        {currentStep === 3 && (
          <StepThree errors={errors} setErrors={setErrors} />
        )}
        {currentStep === 4 && (
          <StepFour errors={errors} setErrors={setErrors} />
        )}

        <div className="flex gap-2">
          {currentStep > 1 && (
            <Button
              onClick={previousStep}
              variant="outline"
              className="mt-5 flex-1"
            >
              Previous
            </Button>
          )}

          {currentStep < 4 && (
            <Button
              onClick={() => {
                const schema =
                  currentStep === 1 ? stepOneSchema : stepTwoSchema;
                const result = schema.safeParse(formData);

                if (result.success) {
                  setErrors({});
                  nextStep();
                  return;
                }

                const newErrors: Record<string, string> = {};

                result.error.issues.forEach((issue) => {
                  const field = issue.path[0];

                  if (typeof field === "string") {
                    newErrors[field] = issue.message;
                  }
                });

                setErrors(newErrors);
              }}
              variant="outline"
              className="mt-5 flex-1"
            >
              Next
            </Button>
          )}

          {currentStep === 4 && (
            <Button
              onClick={() => {
                submitForm();
                resetForm();
              }}
              variant="outline"
              className="mt-5 flex-1"
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MultiStepForm;
