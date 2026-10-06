import z from "zod";

// export const multiStepFormSchema = z.object({
//   name: z.string().min(3, "Name is required"),
//   email: z.email("Invalid email address"),
//   age: z
//     .string()
//     .min(1, "Age is required")
//     .regex(/^\d+$/, "Age must contain only numbers")
//     .refine(
//       (age) => Number(age) >= 18 && Number(age) <= 100,
//       "Age must be between 18 and 100",
//     ),
//   occupation: z.string().min(3, "Occupation is required"),
// });

// export const stepOneSchema = multiStepFormSchema.pick({
//   name: true,
//   email: true,
// });

// export const stepTwoSchema = multiStepFormSchema.pick({
//   age: true,
//   occupation: true,
// });

export const multiStepFormSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),

  email: z.email("Invalid email address"),

  role: z.string().min(1, "Please select your role"),

  message: z.string(),
});

export const stepOneSchema = multiStepFormSchema.pick({
  name: true,
});

export const stepTwoSchema = multiStepFormSchema.pick({
  email: true,
});

export const stepThreeSchema = multiStepFormSchema.pick({
  role: true,
});

export const stepFourSchema = multiStepFormSchema.pick({
  message: true,
});
