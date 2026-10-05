// export type FormData = {
//   name: string;
//   email: string;
//   age: string;
//   occupation: string;
// };

export type FormData = {
  name: string;
  email: string;
  role: string;
  message: string;
};

export type MultiStepFormStore = {
  formData: FormData;
  currentStep: number;

  updateFormData: (data: Partial<FormData>) => void;
  nextStep: () => void;
  previousStep: () => void;
  submitForm: () => void;
  resetForm: () => void;
};
