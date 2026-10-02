import z from "zod";

export const multiStepFormSchema = z.object({
  name: z.string().min(3, "Name is required"),
  email: z.email("Invalid email address"),
  age: z
    .string()
    .min(1, "Age is required")
    .regex(/^\d+$/, "Age must contain only numbers")
    .refine(
      (age) => Number(age) >= 1 && Number(age) <= 100,
      "Age must be between 1 and 100",
    ),
  occupation: z.string().min(3, "Occupation is required"),
});
