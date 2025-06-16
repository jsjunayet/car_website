import { CarModel } from '../Car/Car.Model';
import { OrderInterface } from './Order.Interface';
import { OrderModel } from './Order.Model';
import { orderUtils } from './order.utils';

const CreateOrderService = async (
  orderData: Omit<OrderInterface, 'status' | 'orderDate' | 'transaction'>,
  client_ip: string,
  userId: string,
) => {
  let totalPrice = 0;

  // Validate cars and calculate total price
  for (const item of orderData.items) {
    const car = await CarModel.findById(item.car);
    if (!car) {
      return {
        success: false,
        message: `Car with ID ${item.car} does not exist.`,
      };
    }
    if (car.quantity < item.quantity) {
      return {
        success: false,
        message:
          car.quantity === 0
            ? `${car.brand} ${car.model} is out of stock.`
            : `Only ${car.quantity} units of ${car.brand} ${car.model} available.`,
      };
    }
    item.price = car.price; // Ensure server-side price consistency
    item.totalItemPrice = car.price * item.quantity;
    totalPrice += item.totalItemPrice;
  }

  const newOrder = await OrderModel.create({
    ...orderData,
    userId,
    totalPrice,
    status: 'Pending',
    transaction: {},
  });

  const shurjopayPayload = {
    amount: totalPrice,
    order_id: newOrder._id,
    currency: 'BDT',
    customer_name: orderData.name,
    customer_address: orderData.shippingAddress,
    customer_email: orderData.email,
    customer_phone: orderData.phone,
    customer_city: orderData.townOrCity,
    client_ip,
  };

  const payment = await orderUtils.makePaymentAsync(shurjopayPayload);

  if (payment?.transactionStatus) {
    await OrderModel.findByIdAndUpdate(newOrder._id, {
      transaction: {
        id: payment.sp_order_id,
        status: payment.transactionStatus,
      },
    });
  }

  return payment.checkout_url;
};

const verifyPayment = async (order_id: string) => {
  const verifiedPayment = await orderUtils.verifyPaymentAsync(order_id);

  if (verifiedPayment.length) {
    const paymentInfo = verifiedPayment[0];

    const order = await OrderModel.findOneAndUpdate(
      { 'transaction.id': order_id },
      {
        'transaction.bank_status': paymentInfo.bank_status,
        'transaction.sp_code': paymentInfo.sp_code,
        'transaction.sp_message': paymentInfo.sp_message,
        'transaction.status': paymentInfo.transaction_status,
        'transaction.method': paymentInfo.method,
        'transaction.date_time': paymentInfo.date_time,
        status:
          paymentInfo.bank_status === 'Success'
            ? 'Paid'
            : paymentInfo.bank_status === 'Failed'
              ? 'Pending'
              : paymentInfo.bank_status === 'Cancel'
                ? 'Cancelled'
                : '',
      },
      { new: true },
    );

    if (order && paymentInfo.bank_status === 'Success') {
      for (const item of order.items) {
        const car = await CarModel.findById(item.car);
        if (car) {
          car.quantity -= item.quantity;
          if (car.quantity <= 0) {
            car.quantity = 0;
            car.inStock = false;
          }
          await car.save();
        }
      }
    }

    return paymentInfo;
  }

  return null;
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
  const result = await OrderModel.find();
  return result;
};
const getSingleId = async (id: string) => {
  const result = await OrderModel.find({
    userId: id,
  });
  return result;
};
const deletedorder = async (id: string) => {
  const result = await OrderModel.findByIdAndDelete({ _id: id });
  return result;
};
const allOrderAndStatus = async () => {
  const result = await OrderModel.aggregate([
    {
      $match: {
        createdAt: {
          $gte: new Date(new Date().getFullYear(), 0, 1), // Start of the year
        },
      },
    },
    {
      $group: {
        _id: {
          month: { $month: '$createdAt' },
          status: '$status',
        },
        count: { $sum: 1 },
      },
    },
    {
      $group: {
        _id: '$_id.month',
        statuses: {
          $push: {
            status: '$_id.status',
            count: '$count',
          },
        },
      },
    },
    {
      $project: {
        month: '$_id',
        approved: {
          $let: {
            vars: {
              approvedObj: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: '$statuses',
                      cond: { $eq: ['$$this.status', 'Paid'] },
                    },
                  },
                  0,
                ],
              },
            },
            in: { $ifNull: ['$$approvedObj.count', 0] },
          },
        },
        pending: {
          $let: {
            vars: {
              pendingObj: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: '$statuses',
                      cond: { $eq: ['$$this.status', 'Pending'] },
                    },
                  },
                  0,
                ],
              },
            },
            in: { $ifNull: ['$$pendingObj.count', 0] },
          },
        },
        rejected: {
          $let: {
            vars: {
              rejectedObj: {
                $arrayElemAt: [
                  {
                    $filter: {
                      input: '$statuses',
                      cond: { $eq: ['$$this.status', 'Cancelled'] },
                    },
                  },
                  0,
                ],
              },
            },
            in: { $ifNull: ['$$rejectedObj.count', 0] },
          },
        },
      },
    },
    {
      $project: {
        _id: 0,
        month: 1,
        approved: 1,
        pending: 1,
        rejected: 1,
      },
    },
    {
      $sort: { month: 1 },
    },
  ]);

  // Optional: convert month numbers to names
  const monthNames = [
    '',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const formatted = result.map((item) => ({
    month: monthNames[item.month],
    approved: item.approved,
    pending: item.pending,
    rejected: item.rejected,
  }));

  return formatted;
};

export const AllOrderServices = {
  CreateOrderService,
  CalculateRevenueService,
  verifyPayment,
  getAllorder,
  deletedorder,
  getSingleId,
  allOrderAndStatus,
};
