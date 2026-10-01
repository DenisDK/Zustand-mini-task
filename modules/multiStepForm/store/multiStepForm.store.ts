import { create } from "zustand";
import type { MultiStepFormStore } from "../types/multiStepForm.types";

export const useMultiStepFormStore = create<MultiStepFormStore>((set, get) => ({
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

  nextStep: () => {
    set((state) => ({
      currentStep: Math.min(state.currentStep + 1, 3),
    }));
  },

  previousStep: () => {
    set((state) => ({
      currentStep: Math.max(state.currentStep - 1, 1),
    }));
  },

  submitForm: () => {
    const { formData } = get();
    console.log("Form submitted:", formData);
  },
}));
