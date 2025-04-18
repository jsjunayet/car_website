// import QueryBuilder from '../../utilitiy/QueryBuilder';
import QueryBuilder from '../../utilitiy/QueryBuilder';
import { CarInterface } from './Car.Interface';
import { CarModel } from './Car.Model';

const CreateCarService = async (Car: CarInterface) => {
  const result = await CarModel.create(Car);
  return result;
};
const GetCarService = async (query: Record<string, unknown>) => {
  const queryBuilder = new QueryBuilder(
    CarModel.find(),
    query,
  )
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
  console.log(id, updatedData);
  const result = await CarModel.findByIdAndUpdate(
    id,
    { $set: updatedData },
    { new: true },
  );
  return result;
};

export const CarServices = {
  CreateCarService,
  GetCarService,
  GetSingleCarService,
  updateCarService,
  DeletedCarService,
};

