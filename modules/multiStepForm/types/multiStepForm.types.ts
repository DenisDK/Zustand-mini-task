export type FormData = {
  name: string;
  email: string;
  age: string;
  occupation: string;
};

export type MultiStepFormStore = {
  formData: FormData;
  currentStep: number;

  updateFormData: (data: Partial<FormData>) => void;
  //   nextStep: () => void;
  //   previousStep: () => void;
  //   resetForm: () => void;
};
