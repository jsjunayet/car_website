// import QueryBuilder from '../../utilitiy/QueryBuilder';
import { CarInterface } from './Car.Interface';
import { CarModel } from './Car.Model';

const CreateCarService = async (Car: CarInterface) => {
  const result = await CarModel.create(Car);
  return result;
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const GetCarService = async (query: Record<string, unknown>) => {
  const QueryModel =await CarModel.find(); 

  // const queryBuilder = new QueryBuilder(QueryModel, query)
  //   .search(['brand', 'model', 'category'])
  //   .filter()
  //   .sort();
  // const result = await queryBuilder.QueryModel;
  return QueryModel;
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
