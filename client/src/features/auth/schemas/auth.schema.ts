import { z } from "zod";

export const loginSchema = z.object({
  email: z.email("Please enter a valid email address."),

  password: z.string().min(6, "Password must be at least 6 characters."),

  remember: z.boolean().default(false),
});

export const registerSchema = z
  .object({
    name: z
      .string()
      .min(2, "Name must be at least 2 characters.")
      .max(50, "Name is too long."),

    email: z.email("Please enter a valid email address."),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters.")
      .regex(/[A-Z]/, "Must contain one uppercase letter.")
      .regex(/[a-z]/, "Must contain one lowercase letter.")
      .regex(/[0-9]/, "Must contain one number."),

    confirmPassword: z.string(),

    role: z.enum(["admin", "participant"]),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "Passwords do not match.",
  });

export type LoginFormData = z.infer<typeof loginSchema>;

export type RegisterFormData = z.infer<typeof registerSchema>;
