import { z } from 'zod';

export const CarValidation = z.object({
 body:z.object({
  name: z.string().min(1, 'Name is required'),
  brand: z.string().min(1, 'Brand is required'),
  model: z.string().min(1, 'Model is required'),
  year: z
    .number()
    .min(1886, 'Year must be valid')
    .max(new Date().getFullYear(), 'Year cannot be in the future'),
  price: z.number().min(0, 'Price must be a positive number'),
  category: z.enum(['Sedan', 'SUV', 'Truck', 'Coupe', 'Convertible'], {
    errorMap: () => ({
      message:
        'Invalid category. Must be one of Sedan, SUV, Truck, Coupe, or Convertible',
    }),
  }),
  description: z.string().min(1, 'Description is required'),
  quantity: z.number().int().min(0, 'Quantity must be a non-negative integer'),
  inStock: z.boolean().optional(),
  images: z
    .array(z.string().url('Each image must be a valid URL'))
    .min(1, 'At least one image is required'),
 })
});
