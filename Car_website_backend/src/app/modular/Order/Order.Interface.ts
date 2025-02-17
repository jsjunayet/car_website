import { ObjectId } from 'mongoose';
export interface OrderInterface {
  email: string;
  name:string,
  phone:string,
  townOrCity:string,
  shippingAddress:string
  car: string | ObjectId;
  quantity: number;
  totalPrice: number;
  status: "Pending" | "Paid" | "Shipped" | "Completed" | "Cancelled";
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
