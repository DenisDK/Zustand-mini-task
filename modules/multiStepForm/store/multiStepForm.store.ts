import { create } from "zustand";
import type { MultiStepFormStore } from "../types/multiStepForm.types";

export const useMultiStepFormStore = create<MultiStepFormStore>((set) => ({
  formData: {
    name: "",
    email: "",
    age: "",
    occupation: "",
  },

  currentStep: 1,

  updateFormData: (data) => {
    set((state) => ({
      formData: {
        ...state.formData,
        ...data,
      },
    }));
  },
}));
