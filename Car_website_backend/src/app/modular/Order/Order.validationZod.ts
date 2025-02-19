import { z } from 'zod';

export const OrderValidation = z.object({
body:z.object({
  userId: z.string().optional(), // Ensures userId is provided
  email: z
    .string()
    .min(1, 'Email is required')
    .email('Please provide a valid email address'),
  name: z.string().min(1, 'Name is required'),
  phone: z.string().min(1, 'Phone number is required'),
  townOrCity: z.string().min(1, 'Town or city is required'),
  shippingAddress: z.string().min(1, 'Shipping address is required'),
  car: z.string().min(1, 'Car ID is required'), // Car should be a valid string (ObjectId)
  quantity: z.number().int().min(1, 'Quantity must be at least 1'),
  totalPrice: z.number().min(1, 'Total price must be at least 1'),
  status: z.enum(['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled']).optional(), // Enum validation for status
  orderDate: z.date().default(() => new Date()), // Automatically sets today's date if not provided
  transaction: z.object({
    id: z.string().optional(),
    transactionStatus: z.string().optional(),
    bank_status: z.string().optional(),
    sp_code: z.string().optional(),
    sp_message: z.string().optional(),
    method: z.string().optional(),
    date_time: z.string().optional(),
  }).optional(), 
})
});
