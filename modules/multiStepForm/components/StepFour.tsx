"use client";

import { Textarea } from "@/components/ui/textarea";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepFour = ({
  errors,
  setErrors,
}: {
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  const message = useMultiStepFormStore((state) => state.formData.message);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-1">
        <h2 className="text-[14px] text-white/60">Finishing up</h2>
        <h3 className="text-2xl font-bold text-white/90">
          Anything {"you'd"} like to add?
        </h3>
      </div>

      <div>
        <label htmlFor="message" className="text-sm text-white/50">
          Optional - share anything that helps us follow up.
        </label>
        <Textarea
          id="message"
          value={message}
          onChange={(event) => {
            updateFormData({ message: event.target.value });

            setErrors((prev) => ({
              ...prev,
              message: "",
            }));
          }}
          placeholder="Your message..."
          className="min-h-32 resize-none mt-1"
        />

        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>
    </div>
  );
};

export default StepFour;
