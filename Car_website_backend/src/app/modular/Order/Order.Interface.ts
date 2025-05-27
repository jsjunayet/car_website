import { ObjectId } from 'mongoose';

export interface OrderItem {
  car: string | ObjectId;
  quantity: number;
  price: number; // Price per car
  totalItemPrice: number; // quantity * price
}

export interface OrderInterface {
  userId: string | ObjectId;
  email: string;
  name: string;
  phone: string;
  townOrCity: string;
  shippingAddress: string;
  items: OrderItem[];
  totalPrice: number;
  status: 'Pending' | 'Paid' | 'Shipped' | 'Completed' | 'Cancelled';
  orderDate: Date;
  transaction: {
    id: string;
    method: string;
    status: string;
    bank_status: string;
    sp_code: string;
    sp_message: string;
    date_time: string;
  };
}
