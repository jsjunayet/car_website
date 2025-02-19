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
      required: [true, 'Please enter your email. Email is required'],
    },
    name: {
      type: String,
      required: [true, 'Please enter your name. Name is required'],
    },
    phone: {
      type: String,
      required: [true, 'Please enter your phone number. Phone is required'],
    },
    townOrCity: {
      type: String,
      required: [true, 'Please enter your town or city. Town/City is required'],
    },
    shippingAddress: {
      type: String,
      required: [true, 'Please enter your shipping address. Shipping Address is required'],
    },
    car: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Car',
      required: [true, 'Please enter your carID. Car is required'],
    },
    quantity: {
      type: Number,
      min: [1, 'Quantity must be greater than 0'],
      required: [true, 'Please enter your quantity. Quantity is required'],
    },
    totalPrice: {
      type: Number,
      required: [true, 'Please enter your total price. Total Price is required'],
    },
    status: {
      type: String,
      enum: ['Pending', 'Paid', 'Shipped', 'Completed', 'Cancelled'],
      default: 'Pending',
    },
    orderDate: {
      type: Date,
      default: Date.now, // Automatically sets today's date when an order is created
    },
    transaction: {
      id: String,
      transactionStatus: String,
      bank_status: String,
      sp_code: String,
      sp_message: String,
      method: String,
      date_time: String,
    },
  },
  { timestamps: true, versionKey: false }
);

export const OrderModel = mongoose.model('Order', OrderSchema);
