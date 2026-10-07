"use client";

import { Input } from "@/components/ui/input";
import { useMultiStepFormStore } from "../store/multiStepForm.store";

const StepTwo = ({
  errors,
  setErrors,
}: {
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
}) => {
  const formData = useMultiStepFormStore((state) => state.formData);
  const updateFormData = useMultiStepFormStore((state) => state.updateFormData);

  // return (
  //   <div className="flex flex-col gap-3 ">
  //     <h3 className="text-xl font-bold">Contact</h3>
  //     <div className="">
  //       <Input
  //         value={formData.age}
  //         onChange={(event) => {
  //           updateFormData({ age: event.target.value });

  //           setErrors((prev) => ({
  //             ...prev,
  //             age: "",
  //           }));
  //         }}
  //         placeholder="Age"
  //         type="number"
  //       />
  //       {errors.age && (
  //         <p className="mt-1 text-sm text-red-400">{errors.age}</p>
  //       )}
  //     </div>

  //     <div className="">
  //       <Input
  //         value={formData.occupation}
  //         onChange={(event) => {
  //           updateFormData({ occupation: event.target.value });

  //           setErrors((prev) => ({
  //             ...prev,
  //             occupation: "",
  //           }));
  //         }}
  //         placeholder="Occupation"
  //       />
  //       {errors.occupation && (
  //         <p className="mt-1 text-sm text-red-400">{errors.occupation}</p>
  //       )}
  //     </div>
  //   </div>
  // );

  return (
    <div className="flex flex-col gap-3">
      <div>
        <h2 className="text-xl font-bold text-white/60">Contact</h2>
        <h3 className="text-2xl font-bold text-white/90">
          {"What's"} your email address?
        </h3>
      </div>

      <div>
        <label htmlFor="email" className="text-sm text-white/50">
          {"We'll"} send your confirmation here.
        </label>
        <Input
          id="email"
          className="mt-1"
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
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>
    </div>
  );
};

export default StepTwo;
