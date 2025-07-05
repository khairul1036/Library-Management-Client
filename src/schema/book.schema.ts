import { z } from "zod";

export const createBookSchema = z.object({
  title: z
    .string()
    .min(1, { message: "Title is required" }),

  author: z
    .string()
    .min(1, { message: "Author is required" }),

  genre: z.enum(
    ["FICTION", "NON_FICTION", "SCIENCE", "HISTORY", "BIOGRAPHY", "FANTASY"],
    {
      errorMap: () => ({ message: "Genre is required" }),
    }
  ),

  isbn: z
    .string()
    .min(1, { message: "ISBN is required" }),

  description: z
    .string()
    .optional(),

  copies: z
    .number({ invalid_type_error: "Copies must be a number" })
    .int("Copies must be an integer")
    .min(1, { message: "At least one copy is required" }),

  available: z
    .boolean()
    .optional(),
});

export type CreateBookInput = z.infer<typeof createBookSchema>;
