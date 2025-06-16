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
  const result = { carCount, userCount, orderCount };
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
