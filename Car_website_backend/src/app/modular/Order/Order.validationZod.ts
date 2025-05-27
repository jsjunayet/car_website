import { z } from 'zod';

export const OrderValidation = z.object({
  body: z.object({
    userId: z.string().optional(),

    email: z
      .string()
      .min(1, 'Email is required')
      .email('Please provide a valid email address'),

    name: z.string().min(1, 'Name is required'),
    phone: z.string().min(1, 'Phone number is required'),
    townOrCity: z.string().min(1, 'Town or city is required'),
    shippingAddress: z.string().min(1, 'Shipping address is required'),

    items: z
      .array(
        z.object({
          car: z.string().min(1, 'Car ID is required'),
          quantity: z.number().int().min(1, 'Quantity must be at least 1'),
          price: z.number().min(1, 'Price per item is required'),
          totalItemPrice: z.number().min(1, 'Total item price is required'),
        }),
      )
      .min(1, 'At least one item is required'),

    totalPrice: z.number().min(1, 'Total price must be at least 1'),

    status: z
      .enum(['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'])
      .optional(),

    orderDate: z
      .date()
      .optional()
      .default(() => new Date()),

    transaction: z
      .object({
        id: z.string().optional(),
        method: z.string().optional(),
        status: z.string().optional(),
        bank_status: z.string().optional(),
        sp_code: z.string().optional(),
        sp_message: z.string().optional(),
        date_time: z.string().optional(),
      })
      .optional(),
  }),
});
