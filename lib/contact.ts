import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .min(2, "At least 2 characters")
    .max(50, "Less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces"),
  
  lastName: z
    .string()
    .min(1, "Last name is required")
    .min(2, "At least 2 characters")
    .max(50, "Less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Only letters and spaces"),
  
  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),
  
  phone: z
    .string()
    .min(1, "Phone is required")
    .min(10, "At least 10 digits")
    .regex(/^[\d\s\+\-\(\)]+$/, "Invalid phone number"),
  
  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "At least 10 characters")
    .max(1000, "Too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;