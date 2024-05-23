import { z } from 'zod';

// Define schema for the 'variants' array items
const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

// Define schema for the 'inventory' object
const inventorySchema = z.object({
  quantity: z.number(),
  inStock: z.boolean(),
});

// Define the main schema
const productSchema = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
});

export default productSchema;
