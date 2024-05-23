import { z } from 'zod';

// Define the variant schema
const variantSchema = z.object({
  type: z.string().min(3).max(10),
  value: z.string().min(3).max(10),
});

// Define the inventory schema
const inventorySchema = z.object({
  quantity: z.number().min(1),
  inStock: z.boolean(),
});

// Define the product schema
const productSchema = z.object({
  name: z.string().min(3).max(10),
  description: z
    .string()
    .min(30)
    .max(10000)
    .refine((value) => /^[A-Z]/.test(value), {
      message: 'description must be string',
    }),
  price: z.number().min(1).default(0),
  category: z.string().min(3).max(1000),
  tags: z.enum(['smartphone', 'Apple', 'iOS']),
  variants: variantSchema,
  inventory: inventorySchema,
});

export default productSchema;
