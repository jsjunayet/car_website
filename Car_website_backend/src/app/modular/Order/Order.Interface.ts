import { ObjectId } from 'mongoose';
export interface OrderInterface {
  userId: string | ObjectId;  // Added userId
  email: string;
  name: string;
  phone: string;
  townOrCity: string;
  shippingAddress: string;
  car: string | ObjectId;
  quantity: number;
  totalPrice: number;
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
  orderDate: Date;  // Added orderDate
  transaction: {
    id: string;
    transactionStatus: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    method: string;
    date_time: string;
  };
}

