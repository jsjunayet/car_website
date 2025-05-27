import mongoose, { Schema } from 'mongoose';
import { OrderInterface } from './Order.Interface';

const OrderSchema = new Schema<OrderInterface>(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: [true, 'User ID is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
    },
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
    },
    townOrCity: {
      type: String,
      required: [true, 'Town or city is required'],
    },
    shippingAddress: {
      type: String,
      required: [true, 'Shipping address is required'],
    },
    items: [
      {
        car: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Car',
          required: [true, 'Car ID is required'],
        },
        quantity: {
          type: Number,
          required: [true, 'Quantity is required'],
          min: [1, 'Quantity must be at least 1'],
        },
        price: {
          type: Number,
          required: [true, 'Price per item is required'],
        },
        totalItemPrice: {
          type: Number,
          required: [true, 'Total item price is required'],
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: [true, 'Total order price is required'],
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    orderDate: {
      type: Date,
      default: Date.now,
    },
    transaction: {
      id: { type: String },
      method: { type: String },
      status: { type: String },
      bank_status: { type: String },
      sp_code: { type: String },
      sp_message: { type: String },
      date_time: { type: String },
    },
  },
  { timestamps: true, versionKey: false },
);

export const OrderModel = mongoose.model<OrderInterface>('Order', OrderSchema);
