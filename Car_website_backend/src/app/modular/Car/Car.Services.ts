// import QueryBuilder from '../../utilitiy/QueryBuilder';
import QueryBuilder from '../../utilitiy/QueryBuilder';
import { OrderModel } from '../Order/Order.Model';
import { usermodel } from '../user/user.model';
import { CarInterface } from './Car.Interface';
import { CarModel } from './Car.Model';

const CreateCarService = async (Car: CarInterface) => {
  const result = await CarModel.create(Car);
  return result;
};
const GetCarService = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(CarModel.find(), query)
    .search(['brand', 'name', 'category'])
    .sort()
    .filter();
  const result = await queryBuilder.QueryModel;

  return result;
};

const GetSingleCarService = async (id: string) => {
  const result = await CarModel.findOne({ _id: id });
  return result;
};
const DeletedCarService = async (id: string) => {
  const result = await CarModel.findByIdAndDelete({ _id: id });
  return result;
};
const updateCarService = async (id: string, updatedData: object) => {
  const result = await CarModel.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );
  return result;
};
const GerDetials = async () => {
  const carCount = await CarModel.countDocuments();
  const userCount = await usermodel.countDocuments();
  const orderCount = await OrderModel.countDocuments();
  const revenueResult = await OrderModel.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  const totalRevenue = revenueResult[0]?.totalRevenue || 0;
  // ✅ Today’s orders
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  const endOfToday = new Date();
  endOfToday.setHours(23, 59, 59, 999);

  const todayOrders = await OrderModel.countDocuments({
    createdAt: { $gte: startOfToday, $lte: endOfToday },
  });

  // ✅ This month’s orders
  const startOfMonth = new Date();
  startOfMonth.setDate(1);
  startOfMonth.setHours(0, 0, 0, 0);

  const endOfMonth = new Date();
  endOfMonth.setMonth(endOfMonth.getMonth() + 1);
  endOfMonth.setDate(0);
  endOfMonth.setHours(23, 59, 59, 999);

  const monthOrders = await OrderModel.countDocuments({
    createdAt: { $gte: startOfMonth, $lte: endOfMonth },
  });
  const result = {
    carCount,
    userCount,
    orderCount,
    totalRevenue,
    todayOrders,
    monthOrders,
  };
  return result;
};

export const CarServices = {
  CreateCarService,
  GetCarService,
  GetSingleCarService,
  updateCarService,
  DeletedCarService,
  GerDetials,
};
