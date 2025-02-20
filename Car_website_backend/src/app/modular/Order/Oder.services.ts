import { CarModel } from '../Car/Car.Model';
import { OrderInterface } from './Order.Interface';
import { OrderModel } from './Order.Model';
import { orderUtils } from './order.utils';

const CreateOrderService = async (Order: OrderInterface, client_ip: string, id:string) => {

  const car = await CarModel.findById(Order.car);
  if (!car) {
    return {
      success: false,
      message: 'The car you are trying to order does not exist.',
    };
  }
  if (car.quantity < Order.quantity) {
    return {
      success: false,
      message: `Insufficient stock. ${car.quantity == 0 ? `There is no item available` : `Only ${car.quantity} items are available.`}`,
    };
  }
  if(id){
    Order.userId = id;
  }

  let order = await OrderModel.create(Order);

const shurjopayPayload = {
  amount: Order.totalPrice,
  order_id: order._id,
  currency: "USD",
  customer_name: Order.name,
  customer_address: Order.shippingAddress,
  customer_email: Order.email,
  customer_phone: Order.phone,
  customer_city: Order.townOrCity,
  client_ip,
};

const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

if (payment?.transactionStatus) {
  const updatedOrder = await OrderModel.findByIdAndUpdate(
    order._id,
    {
      transaction: {
        id: payment.sp_order_id,
        transactionStatus: payment.transactionStatus,
      },
    },
    { new: true }
  );

  if (updatedOrder) {
    order = updatedOrder;  
  } else {
    console.error("Order not found or could not be updated");
  }
}

  return payment.checkout_url;
};

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);

  if (verifiedPayment.length) {
    const order = await OrderModel.findOneAndUpdate(
      {
        "transaction.id": order_id,
      },
      {
        "transaction.bank_status": verifiedPayment[0].bank_status,
        "transaction.sp_code": verifiedPayment[0].sp_code,
        "transaction.sp_message": verifiedPayment[0].sp_message,
        "transaction.transactionStatus": verifiedPayment[0].transaction_status,
        "transaction.method": verifiedPayment[0].method,
        "transaction.date_time": verifiedPayment[0].date_time,
        status:
          verifiedPayment[0].bank_status === "Success"
            ? "Paid"
            : verifiedPayment[0].bank_status === "Failed"
            ? "Pending"
            : verifiedPayment[0].bank_status === "Cancel"
            ? "Cancelled"
            : "",
      },
      { new: true }
    );

    if (order && verifiedPayment[0].bank_status === "Success") {
      // পেমেন্ট সফল হলে গাড়ির পরিমাণ আপডেট করুন
      const car = await CarModel.findById(order.car);
      if (car) {
        car.quantity -= order.quantity;
        if (car.quantity === 0) {
          car.inStock = false;
        }
        await car.save();
      }
    }
  }

  return verifiedPayment;
};

const CalculateRevenueService = async () => {
  const result = await OrderModel.aggregate([
    {
      $lookup: {
        from: 'cars',
        localField: 'car',
        foreignField: '_id',
        as: 'carDetails',
      },
    },
    { $unwind: '$carDetails' },
    {
      $group: {
        _id: null,
        totalRevenue: {
          $sum: { $multiply: ['$carDetails.price', '$quantity'] },
        },
      },
    },
    {
      $project: {
        _id: 0,
        totalRevenue: 1,
      },
    },
  ]);

  const totalRevenue = result.length > 0 ? result[0].totalRevenue : 0;
  return totalRevenue;
};
const getAllorder = async () => {
  const result = await OrderModel.find().populate('car')
  return result
}
const getSingleId = async (id:string) => {
  const result = await OrderModel.find({
    userId:id
  }).populate('car')
  return result
}
const deletedorder = async (id: string) => {
  const result = await OrderModel.findByIdAndDelete({ _id: id });
  return result;
};

export const AllOrderServices = {
  CreateOrderService,
  CalculateRevenueService,
  verifyPayment,
  getAllorder,
  deletedorder,
  getSingleId
};
