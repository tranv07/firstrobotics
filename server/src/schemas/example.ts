import { z } from 'zod';

// Zod schema for validation
export const exampleSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100),
  description: z.string().optional(),
  email: z.string().email('Invalid email format'),
  age: z.number().int().min(0).max(150).optional(),
  tags: z.array(z.string()).optional(),
  isActive: z.boolean().default(true),
  createdAt: z.date().default(() => new Date()),
  updatedAt: z.date().default(() => new Date()),
});

export type ExampleInput = z.infer<typeof exampleSchema>;
export type ExampleOutput = ExampleInput & { _id: string };